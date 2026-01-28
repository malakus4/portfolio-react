import { usePageMeta } from "../seo/usePageMeta";
import Hero from '../components/sections/Hero.jsx';
import Skills from '../components/sections/Skills.jsx';
import FeaturedWork from '../components/sections/FeaturedWork.jsx';

function Home() {
  usePageMeta({
    title: "Malak Udom | Frontend Developer",
    description: "Malak Udom is a frontend developer specializing in React and Tailwind CSS. Building scalable, responsive, and high-performance web interfaces.",
    canonical: "https://malakus-portfolio.vercel.app/",
  });

  const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://malakus-portfolio.vercel.app/#website",
  "url": "https://malakus-portfolio.vercel.app/",
  "name": "Malak Udom Portfolio",
  "alternateName": "Malak Udom",
  "publisher": {
    "@id": "https://malakus-portfolio.vercel.app/#person"
  }
};

  return (
    <>
     <script type="application/ld+json">
       {JSON.stringify(websiteSchema)}
      </script>

    <div className='container-page  '>
      <Hero />
      <Skills />
      <FeaturedWork/>
    </div>
    </>
  )
}

export default Home