import React from 'react';
import ThoughtSection from '../components/sections/ThoughtSection.jsx';
import Experiment from '../components/sections/ExperimentPreview.jsx';
import Hero from '../components/sections/Hero.jsx';
import Skills from '../components/sections/Skills.jsx';
import FeaturedWork from '../components/sections/FeaturedWork.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <FeaturedWork/>
      <Experiment/>
      <ThoughtSection />
    </div>
  )
}

export default Home