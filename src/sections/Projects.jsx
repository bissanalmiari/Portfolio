
import hotelImage from "../assets/hotel.png";
import unipath from "../assets/unipath.png";
import "../css/projects.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Hotel Booking System",
    description:
      "Hotel reservation platform with room management.",
    tech: "Laravel • PHP • MySQL",
    image: hotelImage,
    github: "https://github.com/bissanalmiari/Hotel-Management-System.git"
  },
  {
    title: "AI University Recommender",
    description:
      "Hybrid recommendation system for students.",
    tech: "Laravel • PostgreSQL",
    image: unipath,
    github: "https://github.com/bissanalmiari/Fyp_Project.git"
  }
];

export const Projects = () => {
  return (
    <section className="projectSec" id="projects">

      <div className="sectionTitle">
        <span>Portfolio</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projectsGrid">
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>

    </section>
  );
};