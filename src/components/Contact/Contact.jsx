import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out! I will be happy to talk!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img 
                src={getImageUrl("contact/emailIcon.png")} 
                alt="Email icon" 
                />
                <a href="mailto:yoana.stamenovaa@gmail.com">yoana.stamenovaa@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} 
                alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/yoanastamenova/">Yoana Stamenova</a>
            </li>
            <li className={styles.link}>
                <img 
                src={getImageUrl("contact/githubIcon.png")} 
                alt="Github icon" />
                <a href="https://github.com/yoanastamenova">Yoanastamenova</a>
            </li>
        </ul>
    </footer>
  )
}
