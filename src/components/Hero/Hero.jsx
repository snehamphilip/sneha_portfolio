import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-bg-circle circle-1"></div>
      <div className="hero-bg-circle circle-2"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">


          <h1 className="hero-name">
            Sneha M Philip
          </h1>

          <div className="hero-role">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "React Developer",
                2000,
                "Python Programmer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

         

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              Download Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/snehamphilip"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/snehamphilip"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/snehamphilip"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-image">

          <div className="avatar-ring"></div>

          <img
            src="/avatar.png"
            alt="Sneha"
            className="avatar"
          />

        </div>

      </div>

      <div className="scroll-indicator">
        <FaArrowDown />
      </div>

    </section>
  );
}

export default Hero;