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
import { HelpPage } from './HelpPage';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SelectedView = (props: {
  currentView: string;
  setCurrentView: React.Dispatch<
    React.SetStateAction<'analyzer' | 'visualizer' | 'help'>
  >;
  setInitialSearch: React.Dispatch<React.SetStateAction<string>>;
  initialSearch: string;
}): JSX.Element => {
  if (props.currentView === 'visualizer')
    return <Visualizer initialSearch={props.initialSearch} />;
  else if (props.currentView === 'analyzer')
    return (
      <Analyzer
        setInitialSearch={props.setInitialSearch}
        setCurrentView={props.setCurrentView}
      />
    );
  else if (props.currentView === 'help') return <HelpPage />;
};

const Dashboard = (): JSX.Element => {
  const [initialSearch, setInitialSearch] = useState('');
  const [currentView, setCurrentView] = useState<
    'visualizer' | 'analyzer' | 'help'
  >('visualizer');

  const onSelectView = (info: SelectInfo) => {
    setCurrentView(info.key as 'visualizer' | 'analyzer' | 'help');
  };

  // const moveToSearch = (text: string) => {
  //   setInitalSearch(text);
  //   setCurrentView('analyzer');
  // };

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
          <SelectedView
            currentView={currentView}
            setCurrentView={setCurrentView}
            initialSearch={initialSearch}
            setInitialSearch={setInitialSearch}
          />
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
          <Menu.Item key="visualizer" icon={<SlidersOutlined />}>
            Genome Visualizer
          </Menu.Item>
          <Menu.Item key="analyzer" icon={<AppstoreFilled />}>
            Sequence Analyzer
          </Menu.Item>
          <Menu.Item key="help" icon={<AppstoreFilled />}>
            Help
          </Menu.Item>
          <SubMenu key="3" title="More Info" icon={<InfoCircleFilled />} />
        </Menu>
        <div style={{ display: 'flex', flexDirection: 'column' }} />
      </Sider>
    </Layout>
  );
};

export default Dashboard;
