/* eslint-disable react/destructuring-assignment */
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import * as THREE from 'three';
import Data from '../ideogram.json';
import Model from './Model';
import Chroms from '../scripts/chrom.json';
import { Position } from '@react-three/drei/helpers/Position';

interface IProps {
  selectedChromLocations: string[];
  viewMode: number;
  setViewMode: React.Dispatch<React.SetStateAction<number>>;
  selectedChrom: number;
  setSelectedChrom: React.Dispatch<React.SetStateAction<number>>;
}

// Meshes for canvas displaying all chromosomes together.
function Ideogram({
  viewMode,
  selectedChromLocations,
  setViewMode,
  selectedChrom,
  setSelectedChrom,
  ...props
}: IProps): JSX.Element {
  // Render all chromosomes without cytobands
  const [hoveredChrom, setHoveredChrom] = useState(-1);
  let length = 0; // nucleotide length
  if (hoveredChrom > -1) {
    length = Chroms[hoveredChrom - 1].assembly_len;
  }
  //console.log(selectedLocations);
  let size = new THREE.Vector3(10, 10, 10);
  let pos = new THREE.Vector3(0, 0, 0);
  return (
    <>
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Chromosome"
                value={hoveredChrom > -1 ? hoveredChrom : 'None'}
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
      ,{/* <Canvas camera={{ position: [0, 0, 20], fov: 35 }}> */}
      <Canvas camera={{ zoom: 1, position: [0, 0, 10] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 0, 5]} />
        {/* @ts-ignore */}
        {/* <Suspense fallback={null} r3f> */}
        {Data.map((chrom) => {
          size = new THREE.Vector3(0.6, chrom.len / 40, 0.6);
          pos = new THREE.Vector3(chrom.x, chrom.y, 0);
          return (
            <Model
              key={chrom.id}
              info={chrom.id}
              position={pos}
              scale={size}
              hue={
                selectedChromLocations.includes(chrom.id.toString())
                  ? 'blue'
                  : 'orange'
              }
              viewMode={viewMode}
              setViewMode={setViewMode}
              selectedChrom={selectedChrom}
              setSelectedChrom={setSelectedChrom}
              hoveredChrom={hoveredChrom}
              setHoveredChrom={setHoveredChrom}
            />
          );
        })}
        {/* </Suspense> */}
      </Canvas>
    </>
  );
}

export default Ideogram;
