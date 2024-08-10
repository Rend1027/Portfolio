import React from "react";
import azure from "../../assets/images/logos/azure.png";
import css from "../../assets/images/logos/css.png";
import html from "../../assets/images/logos/html.png";
import javascript from "../../assets/images/logos/javascript.png";
import nextjs from "../../assets/images/logos/nextjs.png";
import vscode from "../../assets/images/logos/vscode.png";
import react from "../../assets/images/logos/react.png";
import styles from "./LogoTrack.module.css";

const LogoTrack = () => {
  return (
    <div className={`${styles.logos} ${styles.container}`}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          <img src={azure} alt="Azure" />
          <img src={css} alt="CSS" />
          <img src={html} alt="HTML" />
          <img src={javascript} alt="Javascript" />
          <img src={nextjs} alt="Nextjs" />
          <img src={vscode} alt="VScode" />
          <img src={react} alt="React" />
          <img src={azure} alt="Azure" />
          <img src={css} alt="CSS" />
          <img src={html} alt="HTML" />
          <img src={javascript} alt="Javascript" />
          <img src={nextjs} alt="Nextjs" />
          <img src={vscode} alt="VScode" />
          <img src={react} alt="React" />
          <img src={azure} alt="Azure" />
          <img src={css} alt="CSS" />
          <img src={html} alt="HTML" />
          <img src={javascript} alt="Javascript" />
          <img src={nextjs} alt="Nextjs" />
          <img src={vscode} alt="VScode" />
          <img src={react} alt="React" />
          
        </div>
      </div>
    </div>
  );
};

export default LogoTrack;
