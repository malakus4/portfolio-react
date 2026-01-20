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
        <p>Frontend Developer focused on building clean, responsive, and maintainable web interfaces using React, JavaScript (ES6+), and Tailwind CSS.</p>

        <p>
          I enjoy turning complex ideas into intuitive, user-friendly experiences through reusable components, scalable layouts, and mobile-first design.
        </p>

        <p>
          With a background in scientific research, I bring strong analytical thinking, problem-solving skills, and attention to detail into frontend development. I work comfortably with structured workflows, version control, and production deployments.
        </p>

        <p>
          Tech stack: React, JavaScript, HTML, CSS, Tailwind CSS, React Router, Git, GitHub, Vite, Vercel, Render
        </p>
        
        </div>

    </>
  )
}

export default About