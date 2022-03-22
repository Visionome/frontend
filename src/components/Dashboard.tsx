/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Input, MenuItemProps } from 'antd';
import type { SelectInfo } from 'rc-menu/lib/interface';
import {
  HomeFilled,
  AppstoreFilled,
  InfoCircleFilled,
  DeploymentUnitOutlined,
  SlidersOutlined,
} from '@ant-design/icons';
import { API } from 'aws-amplify';
const { Search } = Input;
import * as queries from '../graphql/queries';
import Window from './Window';
import logoImage from '../assets/logo.png';
import { Visualizer } from './Visualizer';
import { Analyzer } from './Analyzer';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

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
  const [currentView, setCurrentView] = useState<'analyzer' | 'sequencer'>(
    'analyzer',
  );
  const [page, setPage] = useState('home');
  const [blastResults, setBlastResults] = useState(null);
  const blastResultsColumns = [
    {
      title: 'Gene Symbol',
      dataIndex: 'gene_symbol',
      key: 'gene_symbol',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Query Start',
      dataIndex: 'query_start',
      key: 'query_start',
    },
    {
      title: 'Query End',
      dataIndex: 'query_end',
      key: 'query_end',
    },
    {
      title: 'Subject Start',
      dataIndex: 'sbjct_start',
      key: 'sbjct_start',
    },
    {
      title: 'Subject End',
      dataIndex: 'sbjct_end',
      key: 'sbjct_end',
    },
  ];

  const onSelectView = (info: SelectInfo) => {
    setCurrentView(info.key as 'analyzer' | 'sequencer');
  };

  useEffect(() => {
    // searchForGene();
  }, []);

  console.log(page);

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
          {currentView === 'analyzer' ? <Visualizer /> : <Analyzer />}
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
        <Menu
          theme="light"
          defaultSelectedKeys={[currentView]}
          mode="inline"
          onSelect={onSelectView}
        >
          <Menu.Item key="analyzer" icon={<SlidersOutlined />}>
            Genome Visualizer
          </Menu.Item>
          <Menu.Item key="visualizer" icon={<AppstoreFilled />}>
            Sequence Analyzer
          </Menu.Item>
          <SubMenu key="3" title="More Info" icon={<InfoCircleFilled />} />
        </Menu>
        <div style={{ display: 'flex', flexDirection: 'column' }} />
      </Sider>
    </Layout>
  );
};

export default Dashboard;
