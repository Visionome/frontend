import React, { useState } from 'react';
import { Card } from 'antd';

// const tabList = [
//   {
//     key: 'tab1',
//     tab: 'tab1',
//   },
//   {
//     key: 'tab2',
//     tab: 'tab2',
//   },
// ];

const tabListNoTitle = [
  {
    key: 'tab1',
    tab: 'Info',
  },
  {
    key: 'tab2',
    tab: 'Pathology',
  },
];

// const contentListNoTitle = {
//   description: <p>content</p>,
//   diseaseinfo: <p>content</p>,
// };

export interface TabsCardProps {
  urlString: string;
  name: string;
  ensemblid: string;
  description: string;
  diseaseinfo: string;
  location: string;
}

const TabsCard = ({
  urlString,
  name,
  ensemblid,
  description,
  diseaseinfo,
  location,
}: TabsCardProps): JSX.Element => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  //const [activeTabKey2, setActiveTabKey2] = useState('tab2');

  //const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const contentList: Record<string, JSX.Element> = {
    tab1: (
      <>
        <p>Description: {description}</p>
        <p>EnsemblID: {ensemblid}</p>
        <p>Cytoband Location: {location}</p>
      </>
    ),
    tab2: (
      <>
        <p>{diseaseinfo}</p>
      </>
    ),
  };

  const onTab1Change = (key: React.SetStateAction<string>) => {
    setActiveTabKey1(key);
  };
  //   const onTab2Change = (key: React.SetStateAction<string>) => {
  //     setActiveTabKey2(key);
  //   };

  return (
    <>
      <Card
        className="info-card-scrollable"
        title={name.toUpperCase()}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey1}
        tabBarExtraContent={
          <a href={urlString} target="_blank" rel="noreferrer">
            More
          </a>
        }
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
      {/* 
      <br />
      <br />
      <Card
        className="info-card-scrollable"
        hoverable
        title={name.toUpperCase()}
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey2}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey2]}
      </Card>
     */}
    </>
  );
};

export default TabsCard;
