import "../css/skills-tech.css"
export const Skills=()=> {
  const skills = [
    "React",
    "JavaScript",
    "Responsive Design",
    "Laravel",
    "MySQL",
    "Git",
    "Problem Solving",
    "Teamwork"
  ];

  return (
    <section id="skills" className="skillsSec">
      <h2>
        Skills
      </h2>

      <div className="grid ">
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
