import React from 'react'

function About() {

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://malakus-portfolio.vercel.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://malakus-portfolio.vercel.app/about"
    }
  ]
};

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

       <div className='container-page py-4'>
        
        <h2>/About</h2>
        <p>This page is for About</p>
        
        </div>

    </>
  )
}

export default About