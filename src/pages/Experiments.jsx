import React from 'react'

function Experiments() {

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
      "name": "Experiments",
      "item": "https://malakus-portfolio.vercel.app/experiments"
    }
  ]
};

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

       <div className='container-page py-4'>
        
        <h2>/Experiments</h2>
        <p>This is page is for Experimennts</p>
        
        </div>

    </>
  )
}

export default Experiments