import "../css/skills-tech.css"

const techs = [
  {
    name: "HTML",
    color: "#e34f26",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#e34f26"/>
        <path d="M16 27.9l6.1-1.7 2-22.2H16v23.9z" fill="#ef652a"/>
        <path d="M16 13h-4.5l-.3-3.5H16V6H8.1l.9 10h7V13zm.1 8.5l-3.9-1.1-.2-2.9H8.9l.5 5.7 6.7 1.9V21.5z" fill="#fff"/>
        <path d="M16 13v3.5h4.2l-.4 4.5-3.8 1v3.6l6.7-1.9.9-10.7H16zm0-7v3.5h8.3l.3-3.5H16z" fill="#ebebeb"/>
      </svg>
    )
  },
  {
    name: "CSS",
    color: "#1572b6",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572b6"/>
        <path d="M16 27.9l6.1-1.7 2-22.2H16v23.9z" fill="#33a9dc"/>
        <path d="M16 13H11.5l-.3-3.5H16V6H8.1l.9 10H16V13zm0 8.5v3.6l-3.9-1.1-.2-2.9H8.8l.5 5.7L16 28.5V21.5z" fill="#fff"/>
        <path d="M16 13v3.5h4.2l-.4 4.5-3.8 1v3.6l6.7-1.9.9-10.7H16zm0-7v3.5h8.3l.3-3.5H16z" fill="#ebebeb"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    color: "#f7df1e",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#f7df1e"/>
        <path d="M9.5 25.4l2.1-1.3c.4.7.8 1.3 1.7 1.3.8 0 1.4-.3 1.4-1.6V16h2.6v7.9c0 2.6-1.5 3.8-3.8 3.8-2 0-3.2-1-3.8-2.3h-.2zM19 25.2l2.1-1.2c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.8 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.5 3.5 1.9l-2 1.3c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.4-1.2 1.1 0 .8.5 1.1 1.6 1.6l.6.3c2.2.9 3.4 1.9 3.4 4 0 2.3-1.8 3.5-4.2 3.5-2.4 0-3.9-1.1-4.6-2.7h.2z" fill="#323330"/>
      </svg>
    )
  },
  {
    name: "React",
    color: "#61dafb",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#20232a"/>
        <circle cx="16" cy="16" r="2.3" fill="#61dafb"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.3" fill="none"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    )
  },
  {
    name: "Laravel",
    color: "#ff2d20",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#fff1f0"/>
        <path d="M27.9 9.5c0 .1.1.1.1.2v5.1c0 .2-.1.4-.3.5l-4.3 2.5v4.9c0 .2-.1.4-.3.5l-8.9 5.1c0 .1-.1.1-.2.1s-.1 0-.2-.1L5.5 23c-.2-.1-.3-.3-.3-.5V7.6c0-.1 0-.2.1-.2l.2-.1 4.9-2.8c.2-.1.4-.1.5 0L16 7.3l5.1-2.9c.2-.1.4-.1.6 0l4.9 2.8.1.2.2.1zm-1.1 4.9V10l-1.8 1-.2 1.6 2-.2.1 2zM22.4 21v-4.9l-5.7 3.3v4.9l5.7-3.3zM6.3 8.2v14.3l5.7 3.3V21.5l-3-1.7v-.1L6.3 8.2zm.6-1 4.3 2.5 4.3-2.5-4.3-2.5-4.3 2.5zm5.7 9.4L7.3 14v8.2l5.3-3.1V16.6zm.5-8.4V13l4.3 2.5 1.5-.9-5.8-3.4zm4.9 10.1l-4.3-2.5v5.1l4.3 2.5v-5.1zm.6-5.7l-4.3 2.5 4.3 2.5 4.3-2.5-4.3-2.5zm5 4.7l-4.3-2.5v5.1l4.3-2.5v-2.1zm-4.3-7.2V10l-1.8-1v3.5l1.8 1z" fill="#ff2d20"/>
      </svg>
    )
  },
  {
    name: "Bootstrap",
    color: "#7952b3",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#7952b3"/>
        <path d="M9 7h8.5c1.7 0 3 .4 3.9 1.2.9.8 1.3 1.8 1.3 3.1 0 .9-.2 1.7-.6 2.3-.4.6-.9 1.1-1.6 1.4 1 .3 1.7.8 2.2 1.5.5.7.8 1.6.8 2.7 0 .8-.2 1.6-.5 2.3-.3.7-.8 1.2-1.3 1.6-.4.3-.9.5-1.6.7-.7.1-1.4.2-2.3.2H9V7zm2.8 7h4.7c.9 0 1.5-.2 2-.6.5-.4.7-1 .7-1.8 0-.8-.2-1.4-.7-1.8-.5-.4-1.1-.6-2-.6h-4.7V14zm0 7.4h5c1 0 1.7-.2 2.2-.7.5-.5.8-1.1.8-2 0-.8-.3-1.5-.8-1.9-.5-.4-1.3-.7-2.2-.7h-5V21.4z" fill="white"/>
      </svg>
    )
  },
  {
    name: "Tailwind",
    color: "#06b6d4",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#f0fdff"/>
        <path d="M16 8c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.15-1.85 3.5-1.5.76.19 1.3.74 1.9 1.35C17.36 12.9 18.4 14 20.5 14c2.7 0 4.4-1.35 5-4.05-1 1.35-2.15 1.85-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C19.14 9.1 18.1 8 16 8zm-5 6c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.15-1.85 3.5-1.5.76.19 1.3.74 1.9 1.35C12.36 18.9 13.4 20 15.5 20c2.7 0 4.4-1.35 5-4.05-1 1.35-2.15 1.85-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C14.14 15.1 13.1 14 11 14z" fill="#06b6d4"/>
      </svg>
    )
  },
  {
    name: "Git",
    color: "#f05032",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#fff2f0"/>
        <path d="M29 15l-12-12a1.4 1.4 0 0 0-2 0l-2.5 2.5 3.2 3.2a1.7 1.7 0 0 1 2.1 2.1l3 3a1.7 1.7 0 0 1 1.8.4 1.7 1.7 0 1 1-2.4.1l-2.8-2.8v7.3a1.7 1.7 0 1 1-1.4-.1V12a1.7 1.7 0 0 1-.9-2.2L13.8 6.6 3 17.4a1.4 1.4 0 0 0 0 2L15 31.4a1.4 1.4 0 0 0 2 0L29 19.4a1.4 1.4 0 0 0 0-4.4z" fill="#f05032"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    color: "#181717",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#f6f8fa"/>
        <path d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.28 0 .32.22.69.83.57A12.03 12.03 0 0 0 28 16c0-6.63-5.37-12-12-12z" fill="#181717"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    color: "#4479a1",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#f0f6ff"/>
        <path d="M16 5c-4 0-8 1.1-8 3v16c0 1.9 4 3 8 3s8-1.1 8-3V8c0-1.9-4-3-8-3zm0 2c3.6 0 6 .9 6 1.5S19.6 10 16 10s-6-.9-6-1.5S12.4 7 16 7zm6 17c0 .6-2.4 1.5-6 1.5s-6-.9-6-1.5v-2.6c1.5.8 3.7 1.1 6 1.1s4.5-.3 6-1.1V24zm0-5c0 .6-2.4 1.5-6 1.5s-6-.9-6-1.5v-2.6c1.5.8 3.7 1.1 6 1.1s4.5-.3 6-1.1V19zm0-5c0 .6-2.4 1.5-6 1.5s-6-.9-6-1.5v-2.6c1.5.8 3.7 1.1 6 1.1s4.5-.3 6-1.1V14z" fill="#4479a1"/>
      </svg>
    )
  }
];

export const Technologies = () => {
  return (
    <section id="tech" className="techSec">
      <div className="sectionTitle">
        <span>Stack</span>
        <h2>Technologies & Tools</h2>
      </div>

      <div className="techGrid">
        {techs.map((tech) => (
          <div key={tech.name} className="techCard">
            <div className="techIcon" style={{ "--tech-color": tech.color }}>
              {tech.icon}
            </div>
            <span className="techName">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
