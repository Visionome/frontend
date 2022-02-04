// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { API } from 'aws-amplify';
const { Search } = Input;
import * as queries from '../graphql/queries';
import Window from './Window';

const { Header, Content, Footer } = Layout;

const Dashboard = (): JSX.Element => {
  const [genome, setGenome] = useState([]);
  const [vcf, setVcf] = useState([]);
  const [selectedChromLocations, setSelectedChromLocations] = useState([]);
  const [selectedCytobandLocations, setSelectedCytobandLocations] = useState(
    [],
  );

  const searchForGene = async (searchValue) => {
    try {
      const geneSearchResults = await API.graphql({
        query: queries.searchGFFRefs,
        variables: {
          filter: { name: { eq: searchValue } },
          // filter: {
          //   diseaseinfo: { wildcard: `${searchValue.toLowerCase()}*` },
          // },
        },
      });
      // console.log(searchResults);
      // const { data } = searchResults;
      // console.log(searchResults);
      // console.log(searchResults.data.searchGFFRefs.items);

      // TODO: set all selected locations programatically
      // by listing all of the responses for each gene
      // location in search results.
      const results = geneSearchResults.data.searchGFFRefs.items;
      console.log(results);

      const cytoArr = results.map((item) => item.cytobandlocation);
      console.log(cytoArr);

      const chromArr = cytoArr.map((item) => item.substring(0, 1));
      console.log(chromArr);

      // Set locations.
      setSelectedChromLocations(chromArr);
      setSelectedCytobandLocations(cytoArr);

      setGenome(geneSearchResults.data.searchGFFRefs.items);

      const vcfSearchResults = await API.graphql({
        query: queries.searchVCFRefs,
        variables: {
          filter: { geneinfo: { wildcard: `${searchValue.toLowerCase()}*` } },
        },
      });

      setVcf(vcfSearchResults.data.searchVCFRefs.items);
      // console.log(data.data.searchGffRefs.items);
    } catch (err) {
      console.log('there was an error');
      console.log(err);
    }
  };

  const onSearch = (value) => searchForGene(value);

  useEffect(() => {
    // searchForGene();
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', width: '' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          Test Request
          <Search placeholder="Input gene name" onSearch={onSearch} />
          <Window
            selectedChromLocations={selectedChromLocations}
            selectedCytobandLocations={selectedCytobandLocations}
          />
          <h5>Genome Info</h5>
          {genome.map((genomeStuff: any) => {
            return Object.keys(genomeStuff).map((key, index: any) => {
              return (
                <div key={index} style={{ textAlign: 'left' }}>
                  <div style={{ textDecoration: 'underline' }}>{`${key}`}</div>
                  <div
                    style={{ overflowWrap: 'break-word' }}
                  >{`${genomeStuff[key]}`}</div>
                </div>
              );
            });
          })}
          <h5>VCF Info</h5>
          {vcf.map((vcfStuff: any) => {
            return Object.keys(vcfStuff).map((key, index: any) => {
              return (
                <div key={index} style={{ textAlign: 'left' }}>
                  <div style={{ textDecoration: 'underline' }}>{`${key}`}</div>
                  <div
                    style={{ overflowWrap: 'break-word' }}
                  >{`${vcfStuff[key]}`}</div>
                </div>
              );
            });
          })}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Dashboard;
