import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2 className="section-title">
        Experience & Journey
      </h2>

      <div className="timeline">

        {/* KMML Internship */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>2025</span>

            <h3>KMML Internship</h3>

            <p>
              Completed internship at Kerala Minerals
              and Metals Limited (KMML), working with
              Enterprise Data Processing systems,
              networking infrastructure and industrial
              software modules.
            </p>

            <div className="experience-buttons">

              <a
                href="/certificates/kmml-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>

            </div>

          </div>

        </div>

        {/* IEEE Internship */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span>2025</span>

            <h3>IEEE Pune Section Internship</h3>

            <p>
              NeuroReflect: Developed an AI-powered
              mental health detection system using
              Speech Emotion Recognition, NLP,
              emotion analysis and depression
              detection techniques.
            </p>

            <div className="experience-buttons">

              <a
                href="/certificates/ieee-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>

              <a
                href="https://ieeexplore.ieee.org/document/11378740"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-btn"
              >
                View Case Study
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;