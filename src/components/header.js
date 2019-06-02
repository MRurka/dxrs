import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import "../layout/module.scss"

export default Header => (
  <div className={styles.header}>
    <div className="container">
      <div className={styles.logo}>
        <Link to="/">
          <svg width="92" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6535 10.1126C51.6535 15.6718 47.2676 20.2253 41.2336 20.2253C35.1995 20.2253 30.8695 15.7277 30.8695 10.1685V10.1126C30.8695 4.55348 35.2554 0 41.2895 0C47.3235 0 51.6535 4.49761 51.6535 10.0568V10.1126ZM10.4199 20.0297H6.67657L0 0.335224H4.60935L8.65999 13.5766L13.0459 0.279354H16.7333L21.1192 13.5766L25.1698 0.335224H29.6674L22.9909 20.0297H19.2475L14.8337 7.23528L10.4199 20.0297ZM55.4698 19.89H69.5213V15.9791H59.7718V0.335224H55.4698V19.89ZM91.5652 10.1126C91.5652 15.6718 87.1793 20.2253 81.1453 20.2253C75.1112 20.2253 70.7812 15.7277 70.7812 10.1685V10.1126C70.7812 4.55348 75.1671 0 81.2011 0C87.2352 0 91.5652 4.49761 91.5652 10.0568V10.1126ZM55.4627 23.1133C55.4627 26.598 58.4033 29.56 62.5201 29.56C66.6369 29.56 69.4304 26.598 69.4304 23.1133H55.4627Z" fill="black"/>
          </svg>
        </Link>
      </div>
      <div className={styles.menu}>

      </div>
    </div>
  </div>
)
