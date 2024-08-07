import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>More about me</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} 
        alt="About image" 
        className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                    I'm a frontend developer with 
                    experience in building responsive and optimized sites.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                    I have a passion for backend development and 
                    experience in building REST APIs and optimized performance.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UIcon" />
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                    I designed
                    various landing pages and created logos for many of my projects.
                </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
