import React from "react"
import "../layout/module.scss"
import styles from "./page-block-one.module.scss"

export default PageBlockOne => (
  <div className={styles.block}>
    <div className="container">
      <div>
        <h1 className={styles.title}>
          We only live once.<br/>
          Let’s make the best of it.
        </h1>
        <div className={styles.subtitle}>
          WOLO is a global community that believes in the pursuit of purpose, experiences and the betterment of oneself and the people around us.
        </div>
      </div>
    </div>
  </div>
)
