// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const { Header, Content, Footer } = Layout;

const Dashboard = (): JSX.Element => {
  const [genome, setGenome] = useState([]);

  const searchForGene = async () => {
    const searchResults = await API.graphql({
      query: queries.searchGffRefs,
      variables: { filter: { name: { eq: 'SAMD11' } } },
    });
    console.log(searchResults);
    const { data } = searchResults;
    setGenome({ data });
    console.log(genome);
  };

  useEffect(() => {
    searchForGene();
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
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
        {genome.map((genomeStuff: any, index: any) => {
          return <div key={index}>{`${genomeStuff}`}</div>;
        })}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Dashboard;
