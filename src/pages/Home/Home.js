import React from "react";
import LeftSection from "../../layout/LeftSection/LeftSection";
import ProjectSlider from "../../layout/RightSection/ProjectSlider/ProjectSlider";
import LogoTrack from "../../layout/LogoTrack/LogoTrack";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.mainContent}>
        <LeftSection />
        <ProjectSlider />
      </div>
      <div >
        <LogoTrack />
      </div>
    </div>
  );
};

export default Home;
