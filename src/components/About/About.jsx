import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">
        About Me
      </h2>

      <div className="about-wrapper">

        {/* LEFT SIDE */}

        <div className="id-card">

          <div className="id-top">
            DIGITAL ID CARD
          </div>

          <img
            src="/about-avatar.png"
            alt="Sneha"
            className="id-image"
          />

          <h3>Sneha M Philip</h3>

          

          <div className="id-details">

            <div>
              <strong>Degree</strong>
              <p>B.Tech CSE</p>
            </div>

            

            <div>
              <strong>Location</strong>
              <p>Kerala, India</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="about-content">

          <span className="about-tag">
            WHO AM I
          </span>

          <h3>
            Building Modern Web &
            AI Solutions
          </h3>

          <p>
            I am Sneha M Philip, a Computer Science
            Engineering graduate passionate about
            Full Stack Development, Artificial
            Intelligence, Machine Learning and
            modern web technologies.
          </p>

          <p>
            I have developed AI-powered systems,
            React applications, portfolio websites,
            chatbot solutions and data-driven
            applications using Python, React,
            Node.js and Machine Learning tools.
          </p>

          <div className="stats">

            <div className="stat-box">
              <h2>3+</h2>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h2>2</h2>
              <span>Internship</span>
            </div>

            <div className="stat-box">
              <h2>2026</h2>
              <span>Graduate</span>
            </div>

           

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;