import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          Frontend Developer
        </h1>

        <p className="body-text mt-6 ">
          I build clean, responsive, and scalable web interfaces using React,
          Vite, and Tailwind CSS.
        </p>

        

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/work"
            className="inline-flex items-center justify-center rounded-md bg-gray-400 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            View Work
          </Link>

          <a
            href="https://github.com/malakus4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
