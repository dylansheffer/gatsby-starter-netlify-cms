import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'

export const ArticleTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const ArticleContent = contentComponent || Content

  const Article = styled.article`
    
  `

  return (
    <Article>
      {helmet || ''}
      <div className="container">
        <div>
          <div>
            <h1>
              {title}
            </h1>
            <p>{description}</p>
            <ArticleContent content={content} />
            <PostTags tags={tags} />
          </div>
        </div>
      </div>
    </Article>
  )
}

const Article = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ArticleTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Articles`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
