import React, { useState } from "react";
import styles from './ProjectSlider.module.css';

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectData = [
    {
      title: "Project 1",
      description: "Deccription of Project 1",
      imageUrl: "Url",
    },
    {
      title: "Project 2",
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
    setCurrentSlide((prev) => (prev - 1) % projectData.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + projectData.length) % projectData.length
    );
  };

  return (
    <div className={styles.rightContainer}>
      <div>{projectData[currentSlide].title}</div>
      <div>{projectData[currentSlide].description}</div>
      <img
        src={projectData[currentSlide].imageUrl}
        alt={projectData[currentSlide].title}
      />
      <button onclick={previousSlide}>Previous</button>
      <button onclick={nextSlide}>Next</button>
    </div>
  );
};

export default ProjectSlider;
