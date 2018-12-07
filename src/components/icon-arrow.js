import React from "react"
import styles from "./icon-arrow.module.scss"

export default ({ children }) => (
  <svg className={styles.iconArrow} viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0ZM2 21C2 10.5066 10.5066 2 21 2C31.4934 2 40 10.5066 40 21C40 31.4934 31.4934 40 21 40C10.5066 40 2 31.4934 2 21ZM21.9065 14.7147L24.0965 13.3086L32.5388 21.7701L24.0965 30.2317L22.6758 28.0563L27.4265 23.3055L9.46191 23.3055L9.46191 20.2347L27.4265 20.2347L21.9065 14.7147Z"/>
  </svg>
)
