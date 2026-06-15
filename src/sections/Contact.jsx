import "../css/Contact.css"

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    e.target.reset();
  }

  return (
    <section className="contactSec" id="contact">

      <div className="sectionTitle">
        <span>Get In Touch</span>
        <h2>GitHub & Contact</h2>
      </div>

      <div className="contactGrid">

        <div className="contactLinks">
          <p>
            Feel free to reach out through any of the platforms below,
            or send me a message directly using the form.
          </p>

          <a
            className="contactLink"
            href="https://github.com/bissanalmiari"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="contactIcon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.65 10.6.56.1.76-.24.76-.54 0-.27-.01-1.17-.02-2.12-3.11.68-3.77-1.32-3.77-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.49-.28-5.1-1.24-5.1-5.54 0-1.22.44-2.22 1.15-3.01-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.79 1.15 1.79 1.15 3.01 0 4.31-2.62 5.26-5.12 5.54.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.77.54a11.04 11.04 0 0 0 7.64-10.6C23.02 5.24 18.27.5 12 .5Z"/>
            </svg>
            <span className="contactLinkText">
              <span>GitHub</span>
              <strong>github.com/bissanalmiari</strong>
            </span>
          </a>

          <a
            className="contactLink"
            href="https://linkedin.com/in/bissan-al-miari"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="contactIcon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
            </svg>
            <span className="contactLinkText">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/bissan-al-miari</strong>
            </span>
          </a>

          <a
            className="contactLink"
            href="mailto:bissanalmiari@gmail.com"
          >
            <svg className="contactIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/>
              <path d="M3 6.5 12 13l9-6.5"/>
            </svg>
            <span className="contactLinkText">
              <span>Email</span>
              <strong>bissanalmiari@gmail.com</strong>
            </span>
          </a>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
          </label>

          <button type="submit">Send Message</button>
        </form>

      </div>

    </section>
  );
}
