import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftSection from "../LeftSection/LeftSection";
import ProjectSlider from "../RightSection/ProjectSlider/ProjectSlider";
import styles from "./Mainlayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Navbar />
      <div className={styles.content}>
        <LeftSection />
        <ProjectSlider />
      </div>

      {children}
    </div>
  );
};

export default MainLayout;
