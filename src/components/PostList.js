import React from 'react'
import styled from 'styled-components'

import PostExcerpt from '../components/PostExcerpt'

const PostsSection = styled.section`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
`

const PostList = ({ data, title, templateKey, buttonText, ...props}) => (
  <PostsSection>
      <div>
        <h1 className="page-header">{title}</h1>
        {data.allMarkdownRemark.edges
            .filter(post => post.node.frontmatter.templateKey == templateKey)
            .map(({ node: post }) => (
              <PostExcerpt key={post.id} post={post} buttonText={buttonText}/>
            ))}
      </div>
      {props.children}
  </PostsSection>
)



export default PostList;