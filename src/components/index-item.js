import React from "react"
import { Link } from "gatsby"
import styles from "./index-item.module.scss"

const PostLink = ({ post }) => (

  <div>
    <Link className="index-item-link" to={post.frontmatter.path}>
      <div className={styles.item} style={{backgroundImage: "url(" + post.frontmatter.thumbnail + ")" }}></div>
    </Link>
    <h2 className={styles.title}>{post.frontmatter.title}</h2>
    <p className={styles.subtitle}>{post.frontmatter.subtitle}</p>
  </div>

)

export default PostLink
