import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'


import { colors } from '../style/branding'
import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'

export const ArticleTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  author,
  date,
  helmet,
}) => {
  const ArticleContent = contentComponent || Content

  const Article = styled.article`
    p {
      line-height: 1.7em;
      font-weight: 400;
    }

    .post-citation {
      display: block;
      margin: 10px 0;
      width: 100%;
      text-align: center;
      font-size: 15px;
      font-weight: 300;
      color: ${colors.grayText};
      span {
        margin: 0;
        padding: 0 30px;
        a {
          text-decoration: none;
          color: ${colors.grayText};
        }
      }
      time {
        padding: 0 30px;
      }
      p {
        margin: 0;
        display: inline;
        ::before {
          content: "|";
        }
      }
    }
  `

  return (
    <Article>
      {helmet || ''}
      <div className="container">
          <Link to="/articles">Back to Article List</Link>
            <h1 className="page-header">
              {title}
            </h1>
            <div className="post-citation">
              <span>by <a href="http://" rel="author">{author || "Author"}</a></span>
              <p><time>{date}</time></p>
            </div>
            <ArticleContent content={content} />
            <PostTags tags={tags} />
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
      helmet={
      <Helmet>
        <title>{`${post.frontmatter.title} | Articles`}</title>
        <meta name="description" content={post.frontmatter.description}/>
      </Helmet>}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      author={post.frontmatter.author}
      date={post.frontmatter.date}
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
        author
        title
        description
        tags
      }
    }
  }
`
