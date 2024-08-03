import React from "react";
import thisOne from "../../images/thisOne.jpg";
import styles from "./LeftSection.module.css";

const LeftSection = () => {
  return (
    <div className={styles.leftSection}>
      <h1 className={styles.header}>Fullstack Engineer</h1>
      <img src={thisOne} alt="" className={styles.image} />
    </div>
  );
};

export default LeftSection;
