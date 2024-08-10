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
      <div>{projectData[currentSlide].title}</div>
      <div>{projectData[currentSlide].description}</div>
      <img
        className={styles.image1}
        src={projectData[currentSlide].imageUrl}
        alt={projectData[currentSlide].title}
      />
      <button onClick={previousSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ProjectSlider;
