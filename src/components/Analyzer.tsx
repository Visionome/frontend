/* eslint-disable */
import { UploadOutlined } from '@ant-design/icons';
import { Button, Table, Upload, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { BlastAPI, BlastMatch } from '../BlastAPI';

const { Text } = Typography;

// @ts-ignore
export function Analyzer(props): JSX.Element {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<BlastMatch[]>([]);
  const { setCurrentView, setInitialSearch } = props;

  const onRunButtonClick = async () => {
    console.log(input);

    /**
     * Columns:
     *
     * alignment_length
     * gaps
     * expect
     */
    const matches = await BlastAPI.search(input);
    setOutput(matches);
  };

  console.log(props);
  console.log(setInitialSearch);
  console.log(setCurrentView);
  // @ts-ignore
  const moveToSearch = (text) => {
    console.log('i hit it');
    // @ts-ignore
    setInitialSearch(text);
    setCurrentView('analyzer');
  };

  const tableColumns = [
    {
      title: 'Gene Symbol',
      dataIndex: 'gene_symbol',
      key: 'gene_symbol',
      // @ts-ignore
      render: (text) => (
        <Button
          onClick={() => {
            // @ts-ignore
            moveToSearch(text);
          }}
        >
          {text}
        </Button>
      ),
    },
    {
      title: '# Hits',
      dataIndex: 'num_hits',
      key: 'num_hits',
    },
    {
      title: 'Best Score',
      dataIndex: 'best_score',
      key: 'best_score',
    },
    {
      title: 'Best E-Value',
      dataIndex: 'best_evalue',
      key: 'best_evalue',
    },
    {
      title: 'Align Length',
      dataIndex: 'align_length',
      key: 'align_length',
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

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <h1 style={{ textAlign: 'left' }}>Sequence Analyzer</h1>
        <Text style={{ textAlign: 'left', fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin tempor id eu nisl nunc. Mattis nunc sed blandit libero
          volutpat sed cras ornare arcu. Elementum nisi quis eleifend quam
          adipiscing vitae. Pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Odio tempor orci dapibus ultrices. Proin fermentum
          leo vel orci porta non. Vulputate sapien nec sagittis aliquam
          malesuada bibendum. Id velit ut tortor pretium viverra. Nunc sed augue
          lacus viverra vitae congue eu consequat ac. Semper feugiat nibh sed
          pulvinar proin gravida. In aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Sed lectus vestibulum mattis ullamcorper.
          Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        </Text>

        <TextArea style={{ height: 200 }} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'space-between',
          }}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          <Button type="primary" onClick={onRunButtonClick}>
            Run
          </Button>
        </div>
        <h1 style={{ textAlign: 'left' }}>Results</h1>

        <h1 style={{ textAlign: 'left' }}>Output Summary</h1>
        <Text style={{ textAlign: 'left' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin tempor id eu nisl nunc. Mattis nunc sed blandit libero
          volutpat sed cras ornare arcu. Elementum nisi quis eleifend quam
          adipiscing vitae. Pellentesque pulvinar pellentesque habitant morbi
          tristique senectus. Odio tempor orci dapibus ultrices. Proin fermentum
          leo vel orci porta non. Vulputate sapien nec sagittis aliquam
          malesuada bibendum. Id velit ut tortor pretium viverra. Nunc sed augue
          lacus viverra vitae congue eu consequat ac. Semper feugiat nibh sed
          pulvinar proin gravida. In aliquam sem fringilla ut morbi tincidunt
          augue interdum velit. Sed lectus vestibulum mattis ullamcorper.
          Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
        </Text>
        <Button type="primary">View Gene in Visualization</Button>
        <Table dataSource={output} columns={tableColumns} />
      </div>

      <div style={{ display: 'flex', alignItems: 'space-evenly' }}></div>
    </div>
  );
}
