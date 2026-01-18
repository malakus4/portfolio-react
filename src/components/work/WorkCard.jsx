import { Link } from "react-router-dom";

function WorkCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="
        group block rounded-xl overflow-hidden
        transition-transform duration-300
        hover:-translate-y-1
      "
    >
      {/* Top section */}
      <div
        className="
          flex items-center justify-center
          h-32
          bg-gray-100
          border-b border-gray-200
        "
      >
        {project.logo ? (
          <img
            src={project.logo}
            alt={project.name}
            className="h-10 object-contain"
          />
        ) : (
          <span className="text-sm font-medium text-gray-600">
            {project.name}
          </span>
        )}
      </div>

      {/* Bottom section */}
      <div
        className="
          bg-white p-5
          space-y-3
          shadow-sm
          group-hover:shadow-md
          transition
        "
      >
        <h3 className="text-lg font-semibold text-gray-900">
          {project.name}
        </h3>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-block text-sm text-blue-700 hover:underline"
        >
          View Live →
        </a>

        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default WorkCard;
