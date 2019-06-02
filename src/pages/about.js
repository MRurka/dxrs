import React from "react"
import SEO from "../components/SEO.js"
import "../layout/module.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import styles from "../components/page-block-one.module.scss"

const pageTitle = "About"
const pageSubtitle =""

export default AboutPage => (
  <div>
    <SEO></SEO>
    <div>
      <Header></Header>
      <div className={styles.block}>
        <div className="container">
          <div>
            <h1 className={styles.title}>
              { pageTitle }
            </h1>
            <div className={styles.subtitle}>
              { pageSubtitle }
            </div>
          </div>
        </div>
      </div>
        <div className="container">
          Amazing content! wow.
        </div>
      <Footer></Footer>
    </div>
  </div>
)
