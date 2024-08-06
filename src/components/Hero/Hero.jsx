import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.item}>Hi, I'm Yoana</h1>
            <p className={styles.description}>I am a full-stack developer with 1 year of experience using React and NodeJS.
                Reach out if you'd like to learn more!
            </p>
            <a className={styles.contactBtn} href="mailto:yoana.stamenovaa@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
        alt="Hero Image of me" 
        className={styles.heroImg}
        />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
    </section>
  )
}
