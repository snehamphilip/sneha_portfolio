import "./Skills.css";

function Skills() {

  const frontend = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap"
  ];

  const backend = [
    "Node.js",
    "Express",
    "Python",
    "REST API"
  ];

  const database = [
    "MySQL",
    "MongoDB"
  ];

  const ai = [
    "Machine Learning",
    "NLP",
    "TensorFlow",
    "Scikit-Learn"
  ];

  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        Skills & Technologies
      </h2>

      <div className="skills-container">

        <div className="skill-card">

          <h3>Frontend</h3>

          <div className="skill-tags">
            {frontend.map((skill,index)=>(
              <span key={index}>{skill}</span>
            ))}
          </div>

        </div>

        <div className="skill-card">

          <h3>Backend</h3>

          <div className="skill-tags">
            {backend.map((skill,index)=>(
              <span key={index}>{skill}</span>
            ))}
          </div>

        </div>

        <div className="skill-card">

          <h3>Database</h3>

          <div className="skill-tags">
            {database.map((skill,index)=>(
              <span key={index}>{skill}</span>
            ))}
          </div>

        </div>

        <div className="skill-card">

          <h3>AI / ML</h3>

          <div className="skill-tags">
            {ai.map((skill,index)=>(
              <span key={index}>{skill}</span>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;