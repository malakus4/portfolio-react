import React from 'react'
import Banner from '../components/sections/Banner.jsx'
import About from '../components/sections/About.jsx'
import Thoughts from '../components/sections/Thoughts.jsx'
import Experiment from '../components/sections/Experiment.jsx'

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Thoughts />
      <Experiment/>
    </div>
  )
}

export default Home