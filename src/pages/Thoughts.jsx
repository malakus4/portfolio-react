

function Thoughts() {
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
        "name": "Thoughts",
        "item": "https://malakus-portfolio.vercel.app/thoughts"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

       <div className='container-page py-4'>This is Thoughts page</div>

    </>
  );
}

export default Thoughts;
