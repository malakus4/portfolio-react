import React from 'react';
import AboutSection from '../components/sections/AboutSection.jsx';
import ThoughtSection from '../components/sections/ThoughtSection.jsx';
import Experiment from '../components/sections/ExperimentPreview.jsx';
import Hero from '../components/sections/Hero.jsx';
import Skills from '../components/sections/Skills.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <AboutSection />
      <ThoughtSection />
      <Experiment/>
    </div>
  )
}

export default Home