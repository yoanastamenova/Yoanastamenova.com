import React from "react";
import resume from "../../../assets/hero/CV-Yoanastamenova.pdf"

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yoana</h1>
        <p className={styles.description}>
          I'm a full-stack developer looking for my first work experience. I have various projects done
          such as front, back and even design ones. Reach out if you'd like to learn more!
        </p>
        <a href={resume} className={styles.contactBtn} target='_blank'>
          Download resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};