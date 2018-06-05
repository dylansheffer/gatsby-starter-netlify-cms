import React from 'react'
import PostExcerpt from '../components/PostExcerpt'

const PostList = ({ data, title, templateKey }) => (
  <section>
    <div className="container">
      <h1 className="page-header">{title}</h1>
      {data.allMarkdownRemark.edges
          .filter(post => post.node.frontmatter.templateKey == templateKey)
          .map(({ node: post }) => (
          <PostExcerpt key={post.id} post={post} />
          ))}
    </div>
  </section>
)



export default PostList;