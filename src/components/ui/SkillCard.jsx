function SkillCard({ title, description }) {
  return (
    <div className="
      rounded-lg border border-gray-200
      p-6
      bg-surface
      transition
      hover:shadow-sm
    ">
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default SkillCard;
