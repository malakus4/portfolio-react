import React from 'react'
import FooterCopyright from './FooterCopyright'
import FooterAbout from './FooterAbout'
import FooterLinks from './FooterLinks'
import FooterContactCard from './FooterContactCard'
import FooterConnectCard from './FooterConnectCard'

function Footer() {
  return (

    <footer className="mt-24 bg-base border-t border-gray-200">

      {/* Footer 4 coloums */}
      <div className=" py-16">

        

          {/* About + Links */}
          <div className="grid gap-8 lg:grid-cols-4">
            
            
            
            
            <FooterAbout/>
            <FooterLinks/>   
            
      
            <FooterContactCard/>
            <FooterConnectCard/>            
          </div>
        </div>      

      <FooterCopyright/>
    </footer>
  )
}

export default Footer