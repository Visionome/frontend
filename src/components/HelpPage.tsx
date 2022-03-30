import './App.css';
import React from 'react';

function Help(): JSX.Element {
  return (
    <div className="Help">
      <h1 style={{ fontSize: 20, textAlign: 'center' }}>Help Page</h1>
      <h2>What is VisonNome?</h2>
      <p>
        Welcome to VisonNome. This is a website developed by four UCF students
        with info about the human genome. As everyone knows all humanbeings are
        composed of DNA. However, it can become a little complex to some folks
        who are first introduced to theconcept. That is what VisionNome is for.
        It is not an actually real world, but a combination of the words vision
        and genome. This website was made to combine computer aspects of
        visualization with information on the human genome. Every person on this
        planet has a unique form of genome sequencing, and said sequencing can
        contain a slight difference in their genetic coding, which could result
        with a genetic disease, specific to that difference. VisioNome helps
        users see the
      </p>

      <h2>Goal</h2>
      <p>
        Being a bioinformatic website, the goal of Visionome is not to be the
        best of the bunch. What this website offers that other do not is the
        visualization aspect. The Human Genome is complex and can be a bit
        difficult to understand for anyone getting into the subject for the very
        first time. VisioNome is made for the purpose of helping people, who are
        new or new or struggle with the human genome, such as High-Schoolers.
        Other Other websites are more scientific, and can be a bit informative,
        at the levels where beginners can understand. Of course, this website
        might require some basic knowledge of the human genome, but it should be
        more simplier to understand what you want to know.
      </p>

      <h2>How it works, and how to use</h2>
      <p>
        To get started with VisioNome, you will be presented with an ideogram of
        all twenty-four chromosomes, including the Y and X chromosomes. Each
        chromosome on the ideogram can be viewed individually, simply by
        clicking on it, allowing you to view the cytoband. Within said cytoband,
        you can see the different bands that the cytoband is composed of
        multiple different bands that you can also click, which in turn will
        display info of that chromosome. To use the main feature of the website,
        simply type your desired disease, into the search bar which in turn
        light up one of the twenty-four chromosomes. Within that chromosome, it
        will also light up the area on the cytoband showing where the disease
        comes from.
      </p>

      <h2>About the creators</h2>
      <p>
        The project started with five College Students who came together to make
        a project together for Senior Design. One of us came up with the idea of
        making an easy to use bioinformatic website, and we all decided to pitch
        in and help.
      </p>
    </div>
  );
}

export default Help;
