import React from 'react'
import WorkCard from "../components/work/WorkCard";
import { workData } from "../components/work/workData";

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

    <section className="container-page py-16">
      <h1 className="section-title">My Work</h1>
      <p className="mt-4 max-w-2xl body-text">
        Selected projects and collaborations showcasing real-world
        frontend development experience.
      </p>

      <div
        className="
          mt-12
          grid gap-8
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {workData.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </section>

    </>

  )
}
export default Work