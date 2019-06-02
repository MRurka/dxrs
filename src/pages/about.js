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
            WOLO is a global community that believes in the pursuit of purpose, experiences and the betterment of oneself and the people around us. This is the way to a life of meaning.
            Together we sustain positive momentum via mutual support, counsel and encouragement.
          </p>
          <p>
            This belief manifests itself in the following ways:
          </p>
          <ul>
            <li>Private events and retreats focused on wellness and personal development</li>
            <li>Regular goals and accountability meetups</li>
            <li>Sharing of resources and cross pollination of networks</li>
            <li>Counsel to help work through various deliberations</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
)
