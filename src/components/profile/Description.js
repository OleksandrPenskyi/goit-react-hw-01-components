import React from "react";
import styles from "./Profile.module.css";

const Description = ({ name, tag, location, avatar }) => (
  <div className={styles.description}>
    <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
);

export default Description;
