import React from 'react'
import Header from '../components/sections/Header'
import Nav from '../components/sections/Nav'
import Footer from '../components/sections/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Header/>
        <Nav/>

        {/* Page contents renders here */}        
        <Outlet/>

        <Footer/>
    </div>
  )
}

export default MainLayout