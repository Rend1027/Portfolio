import React from "react";
import styles from "./Navbar.module.css";
import flo from "../../images/flo.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.flo}>
        <img src={flo} alt="Logo" />
      </a>
      <div className={styles.navLinks}>
        <ul className={styles["navbar-nav"]}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
      <a href="#github" className={styles.github}>
        <img src={github} alt="Github" />
      </a>
      <a href="#linkedin" className={styles.linkedin}>
        <img src={linkedin} alt="Linkedin" />
      </a>
    </nav>
  );
};

export default Navbar;
