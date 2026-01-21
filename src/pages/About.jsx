import React from "react";

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
      {/* SEO: Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <main className="bg-base">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          
          {/* Intro */}
          <header className="mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed md:leading-loose max-w-3xl">
              I’m <span className="font-medium text-gray-900">Malak Udom</span>, a
              Frontend Developer focused on building performant, accessible, and
              production-ready web applications. I specialize in modern React
              ecosystems and clean UI systems that scale.
            </p>
          </header>

          {/* Experience Snapshot */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Currently working as a <strong>Frontend Developer (Contract)</strong> at
              <strong> EMDEELINK LIMITED</strong>, where I collaborate with designers
              and backend engineers to ship reliable user-facing features,
              optimize performance, and maintain scalable UI architecture.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              Technical Stack
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>
                <span className="font-medium text-gray-900">Frontend:</span> React,
                Vite, Tailwind CSS, JavaScript (ES6+)
              </li>
              <li>
                <span className="font-medium text-gray-900">Routing & State:</span>{" "}
                React Router, component-driven architecture
              </li>
              <li>
                <span className="font-medium text-gray-900">UI & UX:</span>{" "}
                Responsive-first design, accessibility, clean layouts
              </li>
              <li>
                <span className="font-medium text-gray-900">SEO & Deploy:</span>{" "}
                Meta tags, Open Graph, JSON-LD, Vercel & Render
              </li>
            </ul>
          </section>

          {/* Work Philosophy */}
          <section className="mb-16">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              How I Work
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              I approach frontend engineering with a balance of design sensitivity
              and technical discipline. I prioritize clarity, performance, and
              maintainability — writing code that other developers can confidently
              extend and scale.
            </p>
          </section>

          {/* CTA */}
          <footer className="border-t border-gray-200 pt-8">
            <p className="text-gray-700">
              Interested in working together?  
              <a
                href="/contact"
                className="ml-2 font-medium text-primary hover:underline"
              >
                Let’s talk →
              </a>
            </p>
          </footer>

        </section>
      </main>
    </>
  );
}

export default About;
