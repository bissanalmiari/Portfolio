import hotelImage from "../assets/hotel.png";
import unipath from "../assets/unipath.png";
import worknestImage from "../assets/worknest.png";
import cleannestImage from "../assets/cleannest.png";
import lobbyImage from "../assets/lobby.png";
import "../css/projects.css";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "UniPath – AI University Recommender",
    description:
      "AI-powered university recommendation platform with personalized program and career suggestions.",
    tech: "Laravel • React • PostgreSQL",
    image: unipath,
    github: "https://github.com/bissanalmiari/Fyp_Project.git"
  },
  {
    title: "CleanNest – Cleaning Booking Platform",
    description:
      "Full-stack cleaning booking platform with multi-step booking, cleaner assignment, authentication, and admin reporting.",
    tech: "Next.js • React • TypeScript • MongoDB • Stripe",
    image: cleannestImage,
    github: "https://github.com/bissanalmiari/CleanNest.git"
  },
  {
    title: "WorkNest – Freelance Marketplace",
    description:
      "Full-stack freelance marketplace with job matching, authentication, payments, and role-based dashboards.",
    tech: "React • TypeScript • Node.js • Express • MongoDB • Socket.IO",
    image: worknestImage,
    github: "https://github.com/fatimaghzawi/WorkNest-Platform.git"
  },
  {
    title: "Lobby – Real-Time Chat & Voice App",
    description:
      "Real-time communication platform supporting text and voice communication, screen sharing, and temporary rooms.",
    tech: "NestJS • Angular • Socket.IO • LiveKit • Supabase",
    image: lobbyImage,
    github: "https://github.com/Ahmad-khalaf517/lobby.git"
  },
  {
    title: "Hotel Management System",
    description:
      "Full-stack hotel management system with room availability, reservations, user management, and an admin dashboard.",
    tech: "Laravel • PHP • MySQL",
    image: hotelImage,
    github: "https://github.com/bissanalmiari/Hotel-Management-System.git"
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
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

