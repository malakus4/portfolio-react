import React from 'react'
import Banner from '../components/sections/Banner.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ThoughtSection from '../components/sections/ThoughtSection.jsx'
import Experiment from '../components/sections/Experiment.jsx'

function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <ThoughtSection />
      <Experiment/>
    </div>
  )
}

export default Home