import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { workProjects } from "../data/workProjects";

function WorkDetail() {
  const { slug } = useParams();
  const [current, setCurrent] = useState(0);

  // Find the project based on the slug
  const project = workProjects[slug];

  // Handle cases where the project doesn't exist
  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Extract data after the check
  const screenshots = project.screenshots || [];

  const prevSlide = () => {
    setCurrent(current === 0 ? screenshots.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === screenshots.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
  if (screenshots.length <= 1) return;

  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  }, 7000); // 7 seconds slides

  return () => clearInterval(interval);
}, [screenshots.length]);


  return (
    <section className="cont space-y-24 py-16">
      
      <h1 className="text-center pb-14 text-xl  font-bold text-gray-900">
            {project.title}
          </h1>

      {/* Slider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="overflow-hidden rounded-xl border bg-white">
          {screenshots.length > 0 && (
            <img
              src={screenshots[current].src}
              key={current}
              alt={screenshots[current].alt}
              className="w-full object-cover transition-opacity duration-500 animate-in fade-in"
              loading="lazy"
            />
          )}
        </div>

        {/* Arrows - Only show if there's more than 1 image */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white z-10"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow hover:bg-white z-10"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                current === index ? "bg-gray-900 w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-3xl px-4 space-y-12">
       

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {project.description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        {/* Tech stack card */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gray-50 p-8 text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Want to work together?
          </h3>
          <p className="text-gray-600">
            I'm open to frontend roles, contract work, and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="mailto:malakus4@gmail.com"
              className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
            <Link
              to="/work"
              className="rounded-md border bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Back to Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkDetail;