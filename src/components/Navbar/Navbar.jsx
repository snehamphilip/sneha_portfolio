import "./Navbar.css";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="floating-nav">

      <a href="#home" className="nav-icon">
        <FaHome />
      </a>

      <a href="#about" className="nav-icon">
        <FaUser />
      </a>

      <a href="#skills" className="nav-icon">
        <FaCode />
      </a>

      <a href="#projects" className="nav-icon">
        <FaProjectDiagram />
      </a>

      <a href="#experience" className="nav-icon">
        <FaBriefcase />
      </a>

      <a href="#contact" className="nav-icon">
        <FaEnvelope />
      </a>

    </nav>
  );
}

export default Navbar;