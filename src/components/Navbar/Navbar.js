import React from "react";
import styles from "./Navbar.module.css";
import flo from "../../assets/images/flo(1).png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.flo}>
        <img src={flo} alt="Logo" />
      </Link>
      <div className={styles.navLinks}>
        <ul className={styles["navbar-nav"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <a href="https://github.com/Rend1027" className={styles.github}>
        <img src={github} alt="Github" />
      </a>
      <a
        href="https://linkedin.com/in/florencio-rendon"
        className={styles.linkedin}
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
    </nav>
  );
};

export default Navbar;
