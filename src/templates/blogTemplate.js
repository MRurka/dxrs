import React from "react"
import { graphql } from "gatsby"
import "../layout/module.scss"
import "./blogTemplate.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post">
      <div className="blog-post-header" style={{backgroundImage: "url(" + frontmatter.banner+ ")" }}>
        <div className="container">
          <h1 className="index-item-title">
            <span>{frontmatter.first}</span>
            <span className="accent">{frontmatter.nickname}</span>
            <span>{frontmatter.last}</span>
          </h1>
          <div className="index-item-date">
            {frontmatter.date}
          </div>
          <div className="index-item-subtitle">
            {frontmatter.subtitle}
          </div>
        </div>
      </div>
      <div className="blog-post-body">
        <div className="container">
          <div className="big-name">
            {frontmatter.first} on ...
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
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
        subtitle
        path
        first
        nickname
        last
        banner
      }
    }
  }
`
