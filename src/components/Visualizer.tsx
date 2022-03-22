import React, { useState } from 'react';
import { Input } from 'antd';
import Window from './Window';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

const { Search } = Input;

export interface GeneData {
  gene: string;
  description: string;
  ensembleid: string;
  diseaseinfo: Record<string, unknown>;
  cytobandlocation: string;
}

export function Visualizer(): JSX.Element {
  const [genome, setGenome] = useState<GeneData[]>([]);
  const [vcf, setVcf] = useState([]);
  const [selectedChromLocations, setSelectedChromLocations] = useState([]);
  const [selectedCytobandLocations, setSelectedCytobandLocations] = useState(
    [],
  );

  const searchForGene = async (searchValue: string) => {
    try {
      // @ts-expect-error
      const geneSearchQuery: Promise<any> = API.graphql({
        query: queries.searchGFFRefs,
        variables: {
          filter: {
            name: { eq: searchValue },
          },
        },
      });

      // @ts-expect-error
      const diseaseSearchQuery: Promise<any> = API.graphql({
        query: queries.searchGFFRefs,
        variables: {
          filter: {
            diseaseinfo: { matchPhrase: `${searchValue.toLowerCase()}*` },
          },
        },
      });

      const [diseaseSearchResults, geneSearchResults] = await Promise.all([
        geneSearchQuery,
        diseaseSearchQuery,
      ]);

      const results =
        geneSearchResults.data.searchGFFRefs.items.length === 0
          ? diseaseSearchResults.data.searchGFFRefs.items
          : geneSearchResults.data.searchGFFRefs.items;
      const cytoArr = results.map((item: any) => item.cytobandlocation);
      const chromArr = cytoArr.map((item: any) => item.substring(0, 1));

      // Set locations.
      setSelectedChromLocations(chromArr);
      setSelectedCytobandLocations(cytoArr);

      // Clear storage
      localStorage.clear();
      const filteredData = results.map((x: any) => {
        const obj = {
          gene: x.gene,
          descriptions: x.description,
          ensembl_id: x.ensembleid,
          diseaseInfo: x.diseaseinfo,
          cytoband_location: x.cytobandlocation,
        };
        localStorage.setItem(
          obj.cytoband_location,
          JSON.stringify(obj, undefined, 2),
        );
        return obj;
      });
      console.log(filteredData);
      console.log(localStorage.getItem('1p36.33'));
      // Set gene info card objects.
      // setGeneCards(filteredData);
      // Set printable GFF data.
      setGenome(geneSearchResults.data.searchGFFRefs.items);

      const vcfSearchResults = await API.graphql({
        query: queries.searchVCFRefs,
        variables: {
          filter: { geneinfo: { wildcard: `${searchValue.toLowerCase()}*` } },
        },
      });

      // @ts-expect-error
      setVcf(vcfSearchResults.data.searchVCFRefs.items);
      // console.log(data.data.searchGffRefs.items);
      console.log('genome ' + genome);
      console.log('vcf' + vcf);
    } catch (err) {
      console.log('there was an error');
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3
          style={{
            padding: 10,
            width: '25%',
            fontWeight: 'normal',
            fontSize: 18,
          }}
        >
          Genome Visualization
        </h3>
        <Search
          placeholder="Input name, disease, function..."
          allowClear
          onSearch={searchForGene}
          style={{ width: '75%' }}
          enterButton="Search"
        />
      </div>
      <Window
        selectedChromLocations={selectedChromLocations}
        selectedCytobandLocations={selectedCytobandLocations}
      />
      <h5>Genome Info</h5>
      {/* eslint-disable-next-line*/}
      {/*genome.map((genomeStuff: any) => {
            // eslint-disable-next-line
            return Object.keys(genomeStuff).map((key, index: any) => {
              return (
                <div key={index} style={{ textAlign: 'left' }}>
                  <div style={{ textDecoration: 'underline' }}>{`${key}`}</div>
                  <div
                    style={{ overflowWrap: 'break-word' }}
                  >{`${genomeStuff[key]}`}</div>
                </div>
              );
            });
          })*/}
      <h5>VCF Info</h5>
      {/*vcf.map((vcfStuff: any) => {
            return Object.keys(vcfStuff).map((key, index: any) => {
              return (
                <div key={index} style={{ textAlign: 'left' }}>
                  <div style={{ textDecoration: 'underline' }}>{`${key}`}</div>
                  <div
                    style={{ overflowWrap: 'break-word' }}
                  >{`${vcfStuff[key]}`}</div>
                </div>
              );
            });
          })*/}
    </div>
  );
}