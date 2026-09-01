import "../css/skills-tech.css"
export const Skills=()=> {
  const skills = [
    "REST API Design",
    "Clean Architecture",
    "SOLID Principles",
    "JWT Authentication",
    "RBAC",
    "Agile / Scrum",
    "CI/CD",
    "Unit & Integration Testing",
    "Scalable System Design",
    "LLM & Prompt Engineering",
    "Responsive Design",
    "SEO & Core Web Vitals",
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
