import React from 'react'
import AboutSection from '../components/sections/AboutSection.jsx'
import ThoughtSection from '../components/sections/ThoughtSection.jsx'
import Experiment from '../components/sections/ExperimentPreview.jsx'
import Hero from '../components/sections/Hero.jsx'

function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ThoughtSection />
      <Experiment/>
    </div>
  )
}

export default Home