import React from 'react'
import FooterCopyright from './FooterCopyright'
import FooterAbout from './FooterAbout'
import FooterLinks from './FooterLinks'

function Footer() {
  return (

    <footer className="mt-24 bg-base">
      <div className="container-page p-16">
        {/* Top row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

          {/* About + Links */}
          <div className="flex flex-row gap-8 justify-around lg:w-1/2">
            <FooterAbout/>
            <FooterLinks/>

          
          
          
          </div>
        </div>





      </div>
      <FooterCopyright/>
    </footer>
  )
}

export default Footer