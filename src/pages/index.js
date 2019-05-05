import React from "react"
import { graphql } from 'gatsby'
import "../layout/module.scss"
import PostLink from "../components/index-item"
import Header from "../components/header.js"
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
    <div class="index-container">
      <Header></Header>
      <PageBlockOne></PageBlockOne>
      <div className="index-item-container">
        {Posts}
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
            subtitle
            path
            first
            nickname
            last
            thumbnail
          }
        }
      }
    }
  }
`
