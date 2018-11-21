import React from "react"
import { Link } from "gatsby"
import "./post-link.scss"

const PostLink = ({ post }) => (
  <div className="post-link" style={{backgroundImage: "url(" + post.frontmatter.image + ")" }}>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
