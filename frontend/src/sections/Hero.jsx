import profile from "../assets/profile.jpeg";
import "../css/Hero.css"
export const Hero = () => {
  return (
    <section className="heroSection">
      <div className="heroContainer">

        <div className="heroLeft">
          <span className="intro"> Hello, I'm</span>

          <h1>
            Bissan <br />
            Al Miari
          </h1>

          <h2>Full-Stack web Developer</h2>

          <p>
            I build responsive, modern, and user-friendly web applications
            using React, Laravel, and modern technologies.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryBtn">
              View Projects
            </a>

            <a href="#contact" className="secondaryBtn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="heroCenter"><div className="imageWrapper">
          <img src={profile} alt="Bissan" />
        </div>
        </div>

        <div className="heroRight">
          <div className="statCard">
            <h3>B.Sc.</h3>
            <p>Computer Science</p>
          </div>

          <div className="statCard">
            <h3>Full-Stack</h3>
            <p>Web Developer</p>
          </div>

          <div className="statCard">
            <h3>2026</h3>
            <p>Graduate</p>
          </div>
        </div>

      </div>
    </section>
  );
}
