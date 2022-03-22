import { UploadOutlined } from '@ant-design/icons';
import { Button, Table, Upload, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';

const { Text } = Typography;

export function Analyzer(): JSX.Element {
  const [input, setInput] = useState('');
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'space-evenly' }}>
        <div
          style={{
            display: 'flex',
            flexBasis: '100%',
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
            tristique senectus. Odio tempor orci dapibus ultrices. Proin
            fermentum leo vel orci porta non. Vulputate sapien nec sagittis
            aliquam malesuada bibendum. Id velit ut tortor pretium viverra. Nunc
            sed augue lacus viverra vitae congue eu consequat ac. Semper feugiat
            nibh sed pulvinar proin gravida. In aliquam sem fringilla ut morbi
            tincidunt augue interdum velit. Sed lectus vestibulum mattis
            ullamcorper. Dignissim diam quis enim lobortis scelerisque fermentum
            dui faucibus.
          </Text>
        </div>
        <div
          style={{ flexBasis: '100%', padding: '10px' }}
          // @ts-expect-error
          onChange={(dispatch) => setInput(dispatch.target.value)}
        >
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
            <Button type="primary">Run</Button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'space-evenly' }}>
        <div
          style={{
            display: 'flex',
            flexBasis: '100%',
            flexDirection: 'column',
          }}
        >
          <h1 style={{ textAlign: 'left' }}>Results</h1>
          <Table />
        </div>
        <div
          style={{ flexBasis: '100%', padding: '10px' }}
          // @ts-expect-error
          onChange={(dispatch) => setInput(dispatch.target.value)}
        >
          <h1 style={{ textAlign: 'left' }}>Output Summary</h1>
          <Text style={{ textAlign: 'left' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sollicitudin tempor id eu nisl nunc. Mattis nunc sed blandit libero
            volutpat sed cras ornare arcu. Elementum nisi quis eleifend quam
            adipiscing vitae. Pellentesque pulvinar pellentesque habitant morbi
            tristique senectus. Odio tempor orci dapibus ultrices. Proin
            fermentum leo vel orci porta non. Vulputate sapien nec sagittis
            aliquam malesuada bibendum. Id velit ut tortor pretium viverra. Nunc
            sed augue lacus viverra vitae congue eu consequat ac. Semper feugiat
            nibh sed pulvinar proin gravida. In aliquam sem fringilla ut morbi
            tincidunt augue interdum velit. Sed lectus vestibulum mattis
            ullamcorper. Dignissim diam quis enim lobortis scelerisque fermentum
            dui faucibus.
          </Text>
          <Button type="primary">View Gene in Visualization</Button>
        </div>
      </div>
    </div>
  );
}
