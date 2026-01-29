import { usePageMeta } from "../seo/usePageMeta";

function About() {
    usePageMeta({
    title: "About | Malak Udom - Frontend Developer",
    description:
      "Frontend developer focused on clean UI, performance, and maintainable React applications.",
    canonical: "https://malakus-portfolio.vercel.app/about",
  });

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
              I'm <span className="font-medium text-gray-900">Malak Udom</span>, a
              Frontend Developer specializing in building scalable, high-quality
              React applications. I focus on delivering clean, accessible user
              interfaces that perform reliably in production and are easy for
              teams to maintain over time.
            </p>
          </header>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              I currently work as a <strong>Frontend Developer (Contract)</strong> at
              <strong> EMDEELINK LIMITED</strong>, collaborating closely with product
              designers and backend engineers to ship user-facing features. I've
              helped improve frontend performance and reduce UI-related bugs by
              introducing cleaner component architecture and consistent styling,
              contributing to a more stable and maintainable codebase.
            </p>
          </section>

          {/*  Impacts */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              Impact & Results
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              Through component refactoring and layout optimization, I contributed
              to an estimated <strong>20-30% reduction in UI-related rework</strong>,
              helping the team ship features faster and with greater consistency
              across screens.
            </p>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              Technical Skill Set
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>
                <span className="font-medium text-gray-900">Frontend:</span> React,
                Vite, Tailwind CSS, JavaScript (ES6+)
              </li>
              <li>
                <span className="font-medium text-gray-900">Architecture:</span>{" "}
                Component-driven development, React Router (SPA)
              </li>
              <li>
                <span className="font-medium text-gray-900">UI & Accessibility:</span>{" "}
                Responsive design, semantic HTML, accessibility best practices
              </li>
              <li>
                <span className="font-medium text-gray-900">SEO & Deployment:</span>{" "}
                Meta tags, Open Graph, JSON-LD, Vercel & Render
              </li>
            </ul>
          </section>

          {/* What I'm Looking For */}
          <section className="mb-16">
            <h2 className="font-heading text-xl font-semibold text-gray-900 mb-4">
              What I'm Looking For
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl">
              I'm looking to work with teams that value clean engineering
              practices, thoughtful design, and clear communication. I'm
              particularly interested in frontend-focused roles where I can take
              ownership of UI quality, collaborate cross-functionally, and help
              build products that scale.
            </p>
          </section>

          {/* CTA */}
          <footer className="border-t border-gray-200 pt-8">
            <p className="text-gray-700">
              I'm open to remote roles, contract engagements, and
              long-term opportunities.
              {/* <a 
                href="#"
                className="ml-2 font-medium text-primary hover:underline"
              >
                Let's connect →
              </a>    */} 
            </p>
          </footer>

        </section>
      </main>
    </>
  );
}

export default About;
