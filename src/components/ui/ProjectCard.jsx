function ProjectCard({ title, description, tech, live, github, image }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="section-subtitle">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs text-blue-600">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="flex gap-4 text-sm pt-2">
          <a href={live} target="_blank" className="hover:underline">
            Live
          </a>
          <a href={github} target="_blank" className="hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
