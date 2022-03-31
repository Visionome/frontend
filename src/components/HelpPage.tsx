import React from 'react';

export function HelpPage(): JSX.Element {
  return (
    <div className="HelpPage">
      <h1 style={{ fontSize: 20, textAlign: 'center' }}>Help</h1>
      <h2>What is VISIONome?</h2>
      <p>
        Welcome to VISIONome. This is a website developed by five UCF students
        with info about the human genome. As many know, every human possesses a
        unique DNA sequence. However, it can become extremely complex to
        understand for those without training and background in bioinformaticxs.
        This is what inspired us to create VISIONome. VISIONome is a portmanteau
        of the words vision and and genome. This website was made to combine
        computer aspects of visualization with information on the human genome.
        Every person on this planet has a unique form of genome sequencing, and
        said sequencing can contain a slight difference in their genetic coding,
        which could result in genetic diseases, specific to that difference.
      </p>

      <h2>Goal</h2>
      <p>
        Being a bioinformatics-centered website, the goal of VISIONome is not to
        be the best of the bunch. What this website offers that others do
        visualization aspect. The Human Genome is complex and can be a bit
        difficult to understand for anyone getting into the subject for the very
        very first time. VISIONome is made for the purpose of helping people,
        people, who are new or new or struggle with the human genome, such as
        high-schoolers. Other websites are more technical in nature, and less
        appropriate for the understanding of beginners. Of course, this website
        might require some basic knowledge of the human genome, but it should be
        simple to traverse and explore in your quest for more knowledge on the
        genome.
      </p>

      <h2>How to Use</h2>
      <p>
        To get started with VISIONome, you will be presented with an diagram of
        all twenty-four chromosomes, including the Y and X chromosomes. Each
        chromosome on the <i>ideogram</i> can be viewed individually, simply by
        clicking on it, allowing you to view the <i>cytobands</i> contained
        within. To use the primary feature of the visualization, simply type
        your desired disease or gene into the search bar, which in turn, will
        light up search results in the chromosomes. Within any selected
        chromosome, it will also light up the area on the cytoband showing where
        the disease information was found.
      </p>

      <h2>About the creators</h2>
      <p>
        The project started as five UCF students who came together to make a
        project together for Senior Design. One of us came up with the idea of
        making an easy to use bioinformatics website, and we all worked over the
        course of nine months to make it a reality.
      </p>
    </div>
  );
}
