import React, { useState } from "react";
import gamingHub from "../../../assets/images/gamingHub.png";
import underConstruction from "../../../assets/images/underConstruction.png";
import styles from "./ProjectSlider.module.css";

const ProjectSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectData = [
    {
      title: "Gaming Hub",
      description:
        "A Hub where video game lovers can explore a massive library of video games.",
      imageUrl: gamingHub,
    },
    {
      title: "Under Construction2",
      description: "",
      imageUrl: underConstruction,
    },
    {
      title: "Under Construction3",
      description: "",
      imageUrl: underConstruction,
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
      <div className={styles.description}>
        <h4>{projectData[currentSlide].title}</h4>
        <p>{projectData[currentSlide].description}</p>
      </div>
      <div className={styles.sliderContainer}>
        <button className={styles.prevButton} onClick={previousSlide}>
          Previous
        </button>
        <img
          className={styles.image}
          src={projectData[currentSlide].imageUrl}
          alt={projectData[currentSlide].title}
        />
        <button className={styles.nextButton} onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
