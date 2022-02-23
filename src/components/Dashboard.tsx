// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import {
  HomeFilled,
  AppstoreFilled,
  InfoCircleFilled,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import { API } from 'aws-amplify';
const { Search } = Input;
import * as queries from '../graphql/queries';
import Window from './Window';
import logoImage from '../assets/logo.png';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
    <Layout>
      <Content style={{ padding: '0 50px', width: '' }}>
        <Header
          style={{
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <img src={logoImage} />
          <h1
            style={{
              flex: 1,
              fontSize: 36,
              fontWeight: 'bold',
              color: '#009be3',
            }}
          >
            VISIONome
          </h1>
        </Header>
        <div className="site-layout-content">
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <h3
              style={{
                padding: 10,
                width: '25%',
                fontWeight: 'normal',
                fontSize: 18,
              }}
            >
              Genome Visualization
            </h3>
            <Search
              placeholder="Input name, disease, function..."
              allowClear
              onSearch={onSearch}
              style={{ width: '75%' }}
              enterButton="Search"
            />
          </div>
          <Window
            selectedChromLocations={selectedChromLocations}
            selectedCytobandLocations={selectedCytobandLocations}
          />
          <h5>Genome Info</h5>
          {/* eslint-disable-next-line*/}
          {genome.map((genomeStuff: any) => {
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
      <Sider theme="light" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="logo" />
        <div
          style={{
            display: 'flex',
            paddingLeft: 10,
            height: 50,
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <DeploymentUnitOutlined style={{ color: '#0070e8' }} />
          <div style={{ flex: 1, textAlign: 'left', marginLeft: 10 }}>
            <h2 style={{ marginBottom: 0 }}>Menu</h2>
          </div>
        </div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeFilled />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreFilled />}>
            Sequence Analyzer
          </Menu.Item>
          <SubMenu key="3" title="More Info" icon={<InfoCircleFilled />} />
        </Menu>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ backgroundColor: 'red', flexGrow: 1, height: '100%' }}>
            test
          </div>
        </div>
      </Sider>
    </Layout>
  );
};

export default Dashboard;
