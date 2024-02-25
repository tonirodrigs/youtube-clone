import React from "react";
import styles from "../styles/logo.module.css";

export default function Logo(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>
        <div className={styles.icon}></div>
      </div>

      <span className={styles.title}>YouTube</span>
      <span className={styles.country}>BR</span>
    </div>
  )
}