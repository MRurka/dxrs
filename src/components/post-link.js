import React from "react"
import { Link } from "gatsby"
import "./post-link.scss"
import ButtonArrow from "../components/button-arrow.js"

const PostLink = ({ post }) => (

  <div className="post-link" style={{backgroundImage: "url(" + post.frontmatter.thumbnail + ")" }}>
    <h1>{post.frontmatter.title}</h1>
    <Link to={post.frontmatter.path}>
      <ButtonArrow></ButtonArrow>
    </Link>
  </div>
)

export default PostLink


// ({post.frontmatter.date})
