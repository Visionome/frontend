/* eslint-disable */
import { UploadOutlined } from '@ant-design/icons';
import { Button, Table, Upload, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import { BlastAPI, BlastMatch, BlastSearchResponse } from '../BlastAPI';

const { Text } = Typography;

export interface AnalyzerProps {
  setInitialSearch: React.Dispatch<React.SetStateAction<string>>;
  setCurrentView: React.Dispatch<
    React.SetStateAction<'analyzer' | 'visualizer' | 'help'>
  >;
}

export function Analyzer({
  setCurrentView,
  setInitialSearch,
}: AnalyzerProps): JSX.Element {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<BlastSearchResponse>(null);

  //@ts-ignore
  const beforeFileUpload = (file) => {
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = function (evt) {
        //@ts-ignore
        setInput(`${evt.target.result}`);
      };
      reader.onerror = function (evt) {
        console.log(evt);
      };
    }
  };

  const onRunButtonClick = async () => {
    console.log(input);

    /**
     * Columns:
     *
     * alignment_length
     * gaps
     * expect
     */
    const results = await BlastAPI.search(input);
    setOutput(results);
  };

  const moveToSearch = (text: string) => {
    setInitialSearch(text);
    setCurrentView('visualizer');
  };

  const tableColumns = [
    {
      title: 'Gene Symbol',
      dataIndex: 'gene_symbol',
      key: 'gene_symbol',
      render: (text: string) => (
        <Button
          onClick={() => {
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
          <a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi">BLAST</a> is a tool
          used by people in bioinformatics to align smaller sequences of genes
          to larger ones. The reason this is interesting is it allows you to
          take any sequence of A G C and Ts and find what gene it represents.
          Below, you can enter any sequence and find what genes it aligns to in
          order to learn what they are and what genes their assosciated with. If
          this is your first time or your having a hard time deciding what to
          search, feel free to take a look at this{' '}
          <a href="https://www.darkdaily.com/2018/05/16/top-10-list-of-the-most-studied-genes-of-all-time-includes-several-used-in-clinical-laboratory-testing-for-cancers-other-diseases-516/">
            list
          </a>{' '}
          of common gene sequences.
        </Text>

        <TextArea
          style={{ height: 200 }}
          // @ts-ignore
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'space-between',
          }}
        >
          <Upload
            beforeUpload={beforeFileUpload}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          <Button type="primary" onClick={onRunButtonClick}>
            Run
          </Button>
        </div>
        {output != null ? (
          <>
            <h1 style={{ textAlign: 'left' }}>Results</h1>

            <h1 style={{ textAlign: 'left' }}>Output Summary</h1>
            <Text style={{ textAlign: 'left' }}>
              The result of your query generated {output.metadata.total_hits}{' '}
              number of hits on {output.matches.length} number of genes. These
              hits represent parts of your query sequence that were aligned to
              the gene sequences. The best scoring alignment was for x gene and
              it produced {output.metadata.best_score} score. This score is
              determined by how many gaps between the query sequence and the
              gene sequence that had to be added in order to make them align.
              The length of the longest alignment was{' '}
              {output.metadata.longest_alignment} It has an e value of{' '}
              {output.metadata.best_evalue} (e value is a way of describing how
              likely it is that this is the best possible match for the
              sequence). If you'd like to view the gene that was best aligned in
              the visualizer, click here. You can also use the table on the left
              to visualize any gene that was aligned to your sequence.
            </Text>
            <Button
              type="primary"
              onClick={() => {
                moveToSearch(output.metadata.best_gene_symbol);
              }}
            >
              View Gene in Visualization
            </Button>
            <Table dataSource={output.matches} columns={tableColumns} />

            <div style={{ display: 'flex', alignItems: 'space-evenly' }}></div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
