import React from "react"
import styles from "./hero.module.scss"

export default ({ data }) => (
  <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        Power<span className={styles.accent}>up</span>
      </h1>
      <p className={styles.subtitle}>

      </p>
    </div>
  </div>
)
