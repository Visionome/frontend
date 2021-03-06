import React from 'react';

const headerStyle = {
  textDecoration: 'underline',
};

export function HelpPage(): JSX.Element {
  return (
    <div className="HelpPage" style={{ textAlign: 'left' }}>
      <h1 style={{ fontSize: 52, fontWeight: 'bold' }}>Help</h1>
      <h2 style={headerStyle}>What is VISIONome?</h2>
      <p>
        Welcome to VISIONome. This is a website developed by five UCF students
        with info about the human genome. As many know, every human possesses a
        unique DNA sequence. However, it can become extremely complex to
        understand for those without training and background in bioinformatics.
        This is what inspired us to create VISIONome. VISIONome is a{' '}
        <a href="https://en.wikipedia.org/wiki/Portmanteau">portmanteau</a> of
        the words vision and and genome. This website was made to combine
        computer aspects of visualization with information on the human genome.
        Every person on this planet has a unique form of genome sequencing, and
        said sequencing can contain a{' '}
        <a href="https://medlineplus.gov/genetics/understanding/genomicresearch/snp/#:~:text=When%20SNPs%20occur%20within%20a,the%20study%20of%20human%20health.">
          slight difference
        </a>{' '}
        in their genetic coding, which could result in genetic diseases,
        specific to that difference.
      </p>

      <h2 style={headerStyle}>Goal</h2>
      <p>
        Being a bioinformatics-centered website, the goal of VISIONome is not to
        be the best of the bunch. What this website offers that others do
        visualization aspect. The Human Genome is complex and can be a bit
        difficult to comprehend for anyone getting into the subject for the very
        very first time. VISIONome is made for the purpose of helping people,
        people, who are new or new or struggle with the human genome, such as
        high-schoolers. Other websites are more technical in nature, and less
        appropriate for the understanding of beginners. Of course, this website
        might require some basic understanding of the genetics, but it should be
        simple to traverse and explore in your quest for more knowledge on the
        genome.
      </p>

      <h2 style={headerStyle}>How to Use</h2>
      <p>
        To get started with VISIONome, you will be presented with an diagram of
        all twenty-four chromosomes, including the Y and X chromosomes. Each
        chromosome on the{' '}
        <a href="http://www.pathology.washington.edu/research/cytopages/idiograms/human/">
          <i>ideogram</i>
        </a>{' '}
        can be viewed individually, simply by clicking on it, allowing you to
        view the{' '}
        <a href="https://en.wikipedia.org/wiki/G_banding#:~:text=G%2Dbanding%2C%20G%20banding%20or,of%20the%20entire%20chromosome%20complement.">
          <i>cytobands</i>
        </a>{' '}
        contained within. To use the primary feature of the visualization,
        simply type your desired disease or gene into the search bar, which in
        turn, will light up search results in the chromosomes. Within any
        selected chromosome, it will also light up the area on the cytoband
        showing where the disease information was found.
      </p>

      <h2 style={headerStyle}>About the creators</h2>
      <p>
        The project started as five UCF students who came together to make a
        project together for Senior Design. One of us came up with the idea of
        making an easy to use bioinformatics website, and we all worked over the
        course of nine months to make it a reality.
      </p>
      <p>
        If the reader is curious about how this was created feel free to check
        the source code at our <a href="https://github.com/Visionome">github</a>
        .
      </p>

      <h2 style={headerStyle}>Attribution</h2>
      <p>
        We would like to thank NCBI, BioDBNet, NCI, MESH, UniProt and OMIM for
        their work on the biology and providing the public with high quality
        information and keeping it open.
      </p>
      <p>
        We would also like to thank the people cited below for their amazing
        work on the <a href="https://molstar.org/">molstar</a> component.
        Because of the complexity of the work we could not have included it in
        our project without their research and them open sourcing it.
      </p>
      <p>
        Finally, the molstar component uses the protein renders created by
        Alphafold. Alphafold is a machine learning model that creates 3D protein
        renders and is created by the team at DeepMind. Thank you DeepMind team
        for open sourcing the protein renders which allowed us to use them in
        our education tool.
      </p>
      <p>
        David Sehnal, Sebastian Bittrich, Mandar Deshpande, Radka Svobodov??,
        Karel Berka, V??clav Bazgier, Sameer Velankar, Stephen K Burley, Jaroslav
        Ko??a, Alexander S Rose: Mol* Viewer: modern web app for 3D visualization
        and analysis of large biomolecular structures, Nucleic Acids Research,
        2021; https://doi.org/10.1093/nar/gkab314.
      </p>
      <p>
        The uniprot accession containing information on the searched gene in our
        infocards helps our users explore the encoded proteins for each gene.
        The UniProt Consortium UniProt: the universal protein knowledgebase in
        2021 Nucleic Acids Res. 49:D1 (2021)
      </p>
    </div>
  );
}
