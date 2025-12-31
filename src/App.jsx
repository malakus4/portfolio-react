import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Navbar from './navbar.jsx'

function App() {
  let name = "Mentee"

  return (
    <>
    <Header/>
    <Navbar/>

      <h1 className="p-4 m-0 text-2xl text-blue-600">
        Hello {name}!
      </h1>
      
    </>
  )
}

export default App
