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
  console.log('in tabs card');
  console.log('description: ' + description);
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
        <div>{parseDiseaseInfo(diseaseinfo)}</div>
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

function parseDiseaseInfo(diseaseInfo: string) {
  const list = [];
  let temp = '';

  for (let i = 0; i < diseaseInfo.length; i++) {
    if (diseaseInfo[i] === '[') {
      continue;
    } else if (diseaseInfo[i] === ']') {
      list.push(temp);
      console.log('pushing ' + temp);
      temp = '';
      continue;
    } else if (diseaseInfo[i] === ',') {
      if (temp !== '') list.push(temp);
      temp = '';
      continue;
    }
    temp += diseaseInfo[i];
  }

  console.log('hi');
  console.log(list.join('\n'));
  const arr = diseaseInfo.replaceAll('[', '').replaceAll(']', '').split(',');

  const res = [];
  let tempList = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 !== 0) tempList.push(arr[i]);
    else {
      res.push(tempList);
      tempList = [];
    }
  }

  // console.log(diseaseInfo.replaceAll('[', '').replaceAll(']', '').split(','));
  console.log(res);
  // .map((val) => {
  //   return <p key={'yessir'}>{val}</p>;
  // })
  // .join('\n\n');
  res.splice(0, 1);
  return res.map(([one, two, three]) => {
    console.log([one, two, three]);
    return (
      <>
        <div>
          {/* {one}
          <br />
          {two}
          <br />
          {three}
          <br /> */}
          <a href={two}>{one}</a>
        </div>
      </>
    );
  });
}

export default TabsCard;
