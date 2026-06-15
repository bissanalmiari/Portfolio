import "../css/HireMe.css"
export const HireMe = () => {
  const reasons = [
    "Strong frontend foundation",
    "Real-world projects",
    "Quick learner",
    "Clean code",
    "Team player"
  ];

  return (
    <section className="hiremeSec">
      <h2>Why Hire Me?</h2>

      <div className="reasonsGrid">
        {reasons.map(reason => (
          <div className="reasonCard" key={reason}>
            {reason}
          </div>
        ))}
      </div>
    </section>
  );
};