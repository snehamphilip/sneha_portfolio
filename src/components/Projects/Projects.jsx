import "./Projects.css";
import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "NeuroReflect",
      image: "/projects/neuroreflect.png",
      description:
        "AI-powered mental health detection system using Speech Emotion Recognition, NLP, Emotion Analysis, and Depression Prediction.",
      tech: [
        "Python",
        "Machine Learning",
        "NLP",
        "TensorFlow"
      ],
      github:
        "https://github.com/snehamphilip/Depression_Detector"
    },

    {
      title: "PawFect",
      image: "/projects/pawfect.png",
      description:
        "Integrated Pet Care Platform featuring appointment booking, pet health tracking, reminders, and AI-powered recommendations.",
      tech: [
        "React Native",
        "Firebase",
        "AI",
        "JavaScript"
      ],
      github:
        "https://github.com/snehamphilip"
    },

    {
      title: "AI Chatbot",
      image: "/projects/chatbot.png",
      description:
        "Intelligent chatbot capable of understanding user queries and generating context-aware responses.",
      tech: [
        "React",
        "Node.js",
        "OpenAI",
        "MongoDB"
      ],
      github:
        "https://github.com/snehamphilip/ai-chatbot"
    }

  ];

  return (
    <section className="projects" id="projects">

      <h2 className="section-title">
        Featured Projects
      </h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
          >

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, i) => (
                  <span key={i}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  View Source Code
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;