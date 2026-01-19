import { useState } from "react";
import { Link } from "react-router-dom";

const screenshots = [
  "/work/emdeelink-1.webp",
  "/work/emdeelink-2.webp",
  "/work/emdeelink-3.webp",
];

function WorkDetail() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? screenshots.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === screenshots.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="space-y-24 py-16">

              {/* Slider */}
      <div className="relative max-w-5xl mx-auto">

        {/* Image */}
        <div className="overflow-hidden rounded-xl border bg-white">
          <img
            src={screenshots[current]}
            alt={`Project screenshot ${current + 1}`}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white"
        >
          ›
        </button>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full ${
                current === index ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>


              {/* Main content */}
      <div className="mx-auto max-w-3xl space-y-12">

        <header className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            EMDEELINK LIMITED
          </h1>
          <p className="text-gray-600">
            Frontend Developer (Contract)
          </p>
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            EMDEELINK is a production web platform where I contributed to frontend
            UI improvements, layout consistency, and performance-focused styling.
          </p>

          <p>
            My role involved building reusable components, refining responsive
            layouts, and collaborating closely with the backend engineer to
            ensure seamless integration of frontend features.
          </p>

          <p>
            I focused on maintainability, clarity, and user experience while
            working within an existing codebase.
          </p>
        </div>

        {/* Tech stack card */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>


              {/* CTA */}
      <div className="mx-auto max-w-3xl rounded-xl bg-gray-50 p-8 text-center space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Want to work together?
        </h3>

        <p className="text-gray-600">
          I'm open to frontend roles, contract work, and collaborations.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="mailto:malakus4@gmail.com"
            className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Contact Me
          </a>

          <Link
            to="/work"
            className="rounded-md border px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Back to Work
          </Link>
        </div>
      </div>

    </section>

  );
}

export default WorkDetail;
