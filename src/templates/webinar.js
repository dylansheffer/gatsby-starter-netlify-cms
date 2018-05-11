import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import styled from 'styled-components'

export const WebinarTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const WebinarContent = contentComponent || Content

  const Webinar = styled.article`
    
  `

  const Tags = styled.div`
    h2 {
      text-align: center;
    }

    .tagList {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      li {
        a {
          text-decoration: underline;
          color: black;
        }
      }
    }
  `

  return (
    <Webinar>
      {helmet || ''}
      <div className="container">
        <div>
          <div>
            <h1>
              {title}
            </h1>
            <p>{description}</p>
            <WebinarContent content={content} />
            {tags && tags.length ? (
              <Tags>
                <h2>Tags</h2>
                <ul className="tagList">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </Tags>
            ) : null}
          </div>
        </div>
      </div>
    </Webinar>
  )
}

const Webinar = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <WebinarTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Webinars`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

export default Webinar

export const pageQuery = graphql`
  query WebinarByID($id: String!) {
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
