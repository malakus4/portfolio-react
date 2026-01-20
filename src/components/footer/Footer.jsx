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
          <div className="grid grid-cols-1 gap-8 pb-8 lg:grid-cols-3">       
            
            <div className="col-span-2">
              <FooterAbout/>
            </div>

              <FooterLinks/>   
            
      
            {/* <FooterContactCard/> */}
            {/* <FooterConnectCard/>             */}
          </div>
        

      <FooterCopyright/>
    </footer>
  )
}

export default Footer