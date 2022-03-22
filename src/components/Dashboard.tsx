// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { API } from 'aws-amplify';
const { Search } = Input;
import * as queries from '../graphql/queries';
import Window from './Window';

const { Header, Content, Footer } = Layout;

// type CardData = {
//   gene: string;
//   description: string;
//   ensembl_id: string;
//   disease_info: string;
//   cytoband_location: string;
// };

// type CardList = {
//   cardList: CardData[];
// };

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
          filter: {
            name: { eq: searchValue },
          },
        },
      });

      const diseaseSearchResults = await API.graphql({
        query: queries.searchGFFRefs,
        variables: {
          filter: {
            diseaseinfo: { matchPhrase: `${searchValue.toLowerCase()}*` },
          },
        },
      });

      const results =
        geneSearchResults.data.searchGFFRefs.items.length === 0
          ? diseaseSearchResults.data.searchGFFRefs.items
          : geneSearchResults.data.searchGFFRefs.items;

      const cytoArr = results.map((item) => item.cytobandlocation);
      const chromArr = cytoArr.map((item) => item.substring(0, 1));

      // Set locations.
      setSelectedChromLocations(chromArr);
      setSelectedCytobandLocations(cytoArr);

      // Clear storage
      localStorage.clear();
      const filteredData = results.map((x) => {
        const obj = new Object();
        obj.gene = x.gene;
        obj.description = x.description;
        obj.ensembl_id = x.ensembleid;
        obj.disease_info = x.diseaseinfo;
        obj.cytoband_location = x.cytobandlocation;
        localStorage.setItem(
          obj.cytoband_location,
          JSON.stringify(obj, (/_/g, ' '), 2),
        );
        return obj;
      });
      console.log(filteredData);
      console.log(localStorage.getItem('1p36.33'));
      // Set gene info card objects.
      // setGeneCards(filteredData);
      // Set printable GFF data.
      setGenome(geneSearchResults.data.searchGFFRefs.items);

      const vcfSearchResults = await API.graphql({
        query: queries.searchVCFRefs,
        variables: {
          filter: { geneinfo: { wildcard: `${searchValue.toLowerCase()}*` } },
        },
      });

      setVcf(vcfSearchResults.data.searchVCFRefs.items);
      // console.log(data.data.searchGffRefs.items);
      console.log('genome ' + genome);
      console.log('vcf' + vcf);
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
          {/* eslint-disable-next-line*/}
          {/*genome.map((genomeStuff: any) => {
            // eslint-disable-next-line
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
          })*/}
          <h5>VCF Info</h5>
          {/*vcf.map((vcfStuff: any) => {
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
          })*/}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Dashboard;
