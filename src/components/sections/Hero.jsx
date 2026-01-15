import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Frontend Developer
        </h1>

        <p className="body-text mt-6 ">
          I build clean, responsive, and scalable web interfaces using React,
          Vite, and Tailwind CSS.
        </p>

        

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/work"
            className="inline-flex items-center justify-center rounded-md bg-blue-800 px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-700 transition shadow-sm"
          >
            View Work
          </Link>

          <a
            href="https://github.com/malakus4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm sm:text-base font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </div>

      
    </section>
  );
}

export default Hero;
