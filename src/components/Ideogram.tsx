import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Card, Row, Col, Statistic } from 'antd';
// import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import * as THREE from 'three';
import Data from '../ideogram.json';
import Cylinder from './Cylinder';
import Chroms from '../scripts/chrom.json';

interface IProps {
  selectedChromLocations: string[];
  viewMode: number;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
}

// Meshes for canvas displaying all chromosomes together.
function Ideogram(props: IProps): JSX.Element {
  // Render all chromosomes without cytobands
  const [hoveredChrom, setHoveredChrom] = useState(-1);
  let length = 0; // nucleotide length
  if (hoveredChrom > -1) {
    length = Chroms[hoveredChrom - 1].assembly_len;
  }
  //console.log(props.selectedLocations);
  let size = new THREE.Vector3(10, 10, 10);
  let pos = new THREE.Vector3(0, 0, 0);

  let val1 = hoveredChrom > -1 ? hoveredChrom : 'None';

  if (val1 === 23) {
    val1 = 'X';
  } else if (val1 === 24) {
    val1 = 'Y';
  }

  return (
    <>
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Chromosome"
                value={val1}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={hoveredChrom > -1 ? 'Chr' : ''}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Nucleotide Count"
                value={length}
                precision={0}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
      ,
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {Data.map((chrom) => {
          size = new THREE.Vector3(0.3, chrom.len / 15, 0.3);
          pos = new THREE.Vector3(chrom.x, chrom.y, 0);
          return (
            <Cylinder
              key={chrom.id}
              info={chrom.id}
              position={pos}
              scale={size}
              hue={
                props.selectedChromLocations.includes(chrom.id.toString())
                  ? 'blue'
                  : 'orange'
              }
              viewMode={props.viewMode}
              setViewMode={props.setViewMode}
              selectedChrom={props.selectedChrom}
              setSelectedChrom={props.setSelectedChrom}
              hoveredChrom={hoveredChrom}
              setHoveredChrom={setHoveredChrom}
            />
          );
        })}
      </Canvas>
    </>
  );
}

export default Ideogram;
