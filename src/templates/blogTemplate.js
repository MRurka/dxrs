import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO.js"
import "../layout/module.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import styles from "../layout/_content.module.scss"

export default function Template ({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <SEO></SEO>
      <Helmet>
        <meta property="og:title" content={frontmatter.title} />
      </Helmet>
      <div className="blog-post">
        <Header></Header>
        {
          // <div className="blog-post-header" style={{backgroundImage: "url(" + frontmatter.banner+ ")" }}>
          //   <div className="container">
          //     <h1 className="index-item-title">
          //       <span>{frontmatter.title}</span>
          //     </h1>
          //     <div className="index-item-date">
          //       {frontmatter.date}
          //     </div>
          //     <div className="index-item-subtitle">
          //       {frontmatter.subtitle}
          //     </div>
          //   </div>
          // </div>
        }
        <div className={styles.body}>
          <div className="container">
            <div className={styles.title}>
              {frontmatter.title}
            </div>
            <div className={styles.markdownContent} dangerouslySetInnerHTML={{ __html: html }}/>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM DD YY")
        title
        subtitle
        path
        banner
      }
    }
  }
`
