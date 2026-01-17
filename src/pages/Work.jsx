import React from 'react'

function Work() {

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
      "name": "Work",
      "item": "https://malakus-portfolio.vercel.app/work"
    }
  ]
};

  return (

    <>
    <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
      </script>

    <div className='container-page py-10'>
      
      <div>This is work page</div>
     </div>

    </>

  )
}
export default Work