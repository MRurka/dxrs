import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO.js"
import "../layout/module.scss"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import PostLink from "../components/index-item"
import PageBlockOne from "../components/page-block-one.js"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <SEO></SEO>
      <div>
        <Header></Header>
        <PageBlockOne></PageBlockOne>
        <div className="index-item-container">
          <div className="container">
            {Posts}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subtitle
            path
            thumbnail
          }
        }
      }
    }
  }
`
