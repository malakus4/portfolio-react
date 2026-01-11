import React from 'react'
import Header from '../components/sections/Header'
import Nav from '../components/sections/Nav'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Header/>
        <Nav />

        {/* Page contents renders here */}   
        
        <main className="py-8 ">
          <Outlet />
        </main>
           

        <Footer/> 
    </>
  )
}

export default MainLayout