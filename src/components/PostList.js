import React from 'react'
import styled from 'styled-components'

import PostExcerpt from '../components/PostExcerpt'

const PostListSection = styled.section`
`

const PostList = ({ data, title, templateKey, ...props}) => (
  <PostListSection>
      <div>
        <h1 className="page-header">{title}</h1>
        {data.allMarkdownRemark.edges
            .filter(post => post.node.frontmatter.templateKey == templateKey)
            .map(({ node: post }) => (
            <PostExcerpt key={post.id} post={post} />
            ))}
      </div>
      {props.children}
  </PostListSection>
)



export default PostList;