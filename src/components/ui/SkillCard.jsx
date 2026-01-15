function SkillCard({ title, description }) {
  return (
    <div
      className="
        relative
        rounded-xl
        bg-surface
        p-6 sm:p-7
        border border-gray-200/70
        shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        hover:border-blue-200
      "
    >
      {/* subtle accent line */}
      <span className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-blue-100"></span>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
        {title}
      </h3>

      <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default SkillCard;
