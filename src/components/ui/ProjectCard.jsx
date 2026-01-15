function ProjectCard({ title, description, tech, live, github, image }) {
  return (
    <article
      className="
        group
        rounded-xl
        overflow-hidden
        border border-gray-200/70
        bg-surface
        shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        hover:border-blue-200
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-48 w-full object-cover
            transition-transform duration-300
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                bg-blue-50
                px-3 py-1
                text-xs sm:text-sm
                font-medium
                text-blue-700
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-2 text-sm font-medium">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="
              text-blue-700
              hover:underline
              underline-offset-4
            "
          >
            Live
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              text-gray-700
              hover:text-gray-900
              hover:underline
              underline-offset-4
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
