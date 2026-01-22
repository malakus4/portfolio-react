import React from 'react'
import FooterCopyright from './FooterCopyright'
import FooterAbout from './FooterAbout'
import FooterLinks from './FooterLinks'
import FooterContactCard from './FooterContactCard'
import FooterConnectCard from './FooterConnectCard'

function Footer() {
  return (

    <footer className="bg-base-200 container-page py-16">

      {/* About + Links */}
      <div className=" max-w-5xl mx-auto px-4 py-12 grid gap-10 lg:grid-cols-3">            
            <div className="col-span-1 lg:col-span-2">
              <FooterAbout/>
            </div>
              <FooterLinks/>   
          </div>        

      <FooterCopyright/>
    </footer>
  )
}

export default Footer