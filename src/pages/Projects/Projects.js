import React from "react";
import styles from "./Pojects.module.css";
import github from "../../assets/images/github.png";
import gaminghub from "../../assets/images/gamingHub.png";
import underContruction from "../../assets/images/underConstruction.png";

const projects = [
  {
    id: 1,
    title: "Gaming Hub",
    description:
      "A website where video game lovers can explore a massive library of video games.",
    techstack: "Vite, JavaScript, React, Typescript, Chackra UI",
    image: gaminghub,
    demo: "https://video-game-site-three.vercel.app/",
    git: "https://github.com/Rend1027/Portfolio",
  },
  {
    id: 2,
    title: "Under Constuction",
    description: "Something cool coming soon.",
    techstack: "Something cool coming soon",
    image: underContruction,
    demo: "",
    git: "",
  },
  {
    id: 3,
    title: "Under Constuction",
    description: "Something cool coming soon.",
    techstack: "Something cool coming soon",
    image: underContruction,
    demo: "",
    git: "",
  },
  {
    id: 4,
    title: "Under Constuction",
    description: "Something cool coming soon.",
    techstack: "Something cool coming soon",
    image: underContruction,
    demo: "",
    git: "",
  },
];

const Projects = () => {
  return (
    <div className={styles.mainContainer}>
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`${styles.cards} ${
            index % 2 === 0 ? styles.leftCard : styles.rightCard
          }`}
        >
          <span className={styles.header}>
            <h2>{project.title}</h2>
            <a href={project.demo}>
              <p className={styles.live}>Live Demo</p>
            </a>
            <a href={project.git}>
              <img className={styles.github} alt="Github" src={github} />
            </a>
          </span>
          <p>{project.description}</p>
          <p>
            <span className={styles.tech}>Tech Stack:</span> {project.techstack}
          </p>
          <img className={styles.project} alt="Project" src={project.image} />
        </section>
      ))}
    </div>
  );
};

export default Projects;
