import React from "react"
import SEO from "../components/SEO.js"
import "../layout/module.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import styles from "../layout/_content.module.scss"

export default AboutPage => (
  <div>
    <SEO></SEO>
    <div>
      <div className="page-heading">
        <Header></Header>
      </div>
      <div className="container">
        <div>
          <h1 className={styles.title}>
            About
          </h1>
        </div>
        <div className={styles.markdownContent}>
          <p>
            WOLO is a global community that believes in the pursuit of purpose, experiences and the betterment of oneself and the people around us, as the foundation to a meaningful life.
            Together, we sustain positive momentum, support, counsel and lift each other when needed.
          </p>
          <p>
            This belief manifests itself in the following ways:
          </p>
          <ul>
            <li>Private events and retreats focused on wellness and personal development</li>
            <li>Regular goals and accountability meetups</li>
            <li>Sharing of resources and cross pollination of networks</li>
            <li>Counsel meetings to help think through difficult decisions</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
)
