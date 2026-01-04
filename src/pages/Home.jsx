import React from 'react'
import Banner from '../components/sections/Banner.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import Thoughts from '../components/sections/Thoughts.jsx'
import Experiment from '../components/sections/Experiment.jsx'

function Home() {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Thoughts />
      <Experiment/>
    </div>
  )
}

export default Home