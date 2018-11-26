import React from "react"
import { Link } from "gatsby"
import "./index-item.scss"
import IconArrow from "../components/icon-arrow.js"

const PostLink = ({ post }) => (

  <div className="index-item" style={{backgroundImage: "url(" + post.frontmatter.thumbnail + ")" }}>
    <h1 className="index-item-title">
      <span>{post.frontmatter.first}</span>
      <span className="accent">{post.frontmatter.nickname}</span>
      <span>{post.frontmatter.last}</span>
    </h1>
    <div>
      {post.frontmatter.description}
    </div>
    <Link className="index-item-link" to={post.frontmatter.path}>
      <IconArrow></IconArrow>
    </Link>
  </div>
)

export default PostLink

// ({post.frontmatter.date})
