// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { API } from 'aws-amplify';
const { Search } = Input;
import * as queries from '../graphql/queries';

const { Header, Content, Footer } = Layout;

const Dashboard = (): JSX.Element => {
  const [genome, setGenome] = useState([]);

  const searchForGene = async (searchValue) => {
    try {
      const searchResults = await API.graphql({
        query: queries.searchGffRefs,
        variables: { filter: { name: { eq: searchValue } } },
      });
      // console.log(searchResults);
      // const { data } = searchResults;
      // console.log(searchResults);
      // console.log(searchResults.data.searchGFFRefs.items);
      setGenome(searchResults.data.searchGFFRefs.items);
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
          <Search placeholder="input gene name" onSearch={onSearch} />
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
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Dashboard;
