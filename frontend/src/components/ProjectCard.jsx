function ProjectCard({
  image,
  title,
  description,
  tech,
  github
}) {
  return (
    <div className="projectCard">

      <img
        src={image}
        alt={title}
        className="projectImg"
      />

      <div className="projectContent">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>{tech}</span>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;