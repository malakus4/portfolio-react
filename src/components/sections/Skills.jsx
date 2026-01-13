import Section from "../ui/Section";
import SkillCard from "../ui/SkillCard";

function Skills() {
  return (
    <Section>
      <h2 className="section-title">
        What I Do
      </h2>

      <p className="mt-4 max-w-2xl text-gray-600">
        I focus on building frontend systems that are maintainable,
        responsive, and production-ready.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          title="Component Architecture"
          description="Designing reusable components and layouts with clear separation of concerns."
        />

        <SkillCard
          title="Responsive Design"
          description="Mobile-first layouts that adapt cleanly across screen sizes using Tailwind CSS."
        />

        <SkillCard
          title="Routing & Layouts"
          description="Structuring applications with React Router, shared layouts, and nested routes."
        />

        <SkillCard
          title="Styling Systems"
          description="Centralized spacing, typography, and utility patterns for consistency."
        />

        <SkillCard
          title="Version Control"
          description="Git-based workflows with meaningful commits, branches, and pull requests."
        />

        <SkillCard
          title="Build & Deployment"
          description="Vite-powered builds and live deployments using modern hosting platforms."
        />
      </div>
    </Section>
  );
}

export default Skills;
