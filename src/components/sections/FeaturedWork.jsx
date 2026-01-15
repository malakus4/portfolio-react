import ProjectCard from "../ui/ProjectCard.jsx";
import towerImg from "../../assets/images/portfolio.PNG";
import Section from "../ui/Section.jsx";

function FeaturedWork() {
  return (
    <Section>
      <h2 className="section-title">Featured Work</h2>
      <p className="mt-4 mb-8 max-w-2xl text-base sm:text-lg text-gray-700 leading-relaxed">
        A selection of projects where I applied modern frontend practices,
        clean architecture, and real-world problem solving.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          description="Responsive portfolio built with React, Vite, and Tailwind CSS."
          tech={["React", "Vite", "Tailwind", "React Router"]}
          live="#"
          github="#"
          image={towerImg}
        />
      </div>
    </Section>
  );
}

export default FeaturedWork;
