import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header.jsx'
import Banner from './components/layout/Banner.jsx'
import Nav from './components/layout/Nav.jsx'
import About from './components/layout/About.jsx'
import Thoughts from './components/layout/Thoughts.jsx'
import Experiment from './components/layout/Experiment.jsx'
import Footer from './components/layout/Footer.jsx'

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Banner/>
    <About/>  
    <Thoughts/>
    <Experiment/>
    <Footer/>   
      
    </>
  )
}

export default App
