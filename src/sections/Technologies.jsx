import "../css/skills-tech.css"
const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Laravel",
  "Bootstrap",
  "Tailwind",
  "Git",
  "GitHub",
  "MySQL"
];

export const Technologies=()=> {
  return (
    <section id="tech" className="techSec">
      <div className="techs">
        <h2>
          Technologies & Tools
        </h2>

        <div className="grid">
          {techs.map((tech) => (
            <div key={tech} className="tech">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

