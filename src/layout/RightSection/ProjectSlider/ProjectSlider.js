import React, { useState } from "react";
import github from "../../../images/github.png";
import styles from "./ProjectSlider.module.css";

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectData = [
    {
      title: "Yolo",
      description: "Deccription of Project 1",
      imageUrl: github,
    },
    {
      title: "Yolo",
      description: "Deccription of Project 1",
      imageUrl: "Url",
    },
    {
      title: "Project 3",
      description: "Deccription of Project 1",
      imageUrl: "Url",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectData.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + projectData.length) % projectData.length
    );
  };

  return (
    <div className={styles.rightContainer}>
      <h3 className={styles.header}>Some Of My Latest Work</h3>
      <div>{projectData[currentSlide].title}</div>
      <div>{projectData[currentSlide].description}</div>
      <img
        src={projectData[currentSlide].imageUrl}
        alt={projectData[currentSlide].title}
      />
      <button onClick={previousSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ProjectSlider;
