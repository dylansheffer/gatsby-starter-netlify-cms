import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'


import { colors } from '../style/branding'
import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'
import Container from '../components/Container'

export const CourseTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
}) => {
  const CourseContent = contentComponent || Content

  const Course = styled.article`
    margin: 25px 0;

    blockquote {
      display: block;
      background: ${colors.offWhite};
      padding: 15px 20px 15px 60px;
      margin: 0;
      text-align: left;
      border-left: 3px solid ${colors.lightGray};
      position: relative;
      font-size: 1.3em;

      ::before {
        content: "\\201C";
        font-family: Georgia, serif;
        font-size: 60px;
        font-weight: bold;
        color: ${colors.lightGray};
        position: absolute;
        left: 10px;
        top: 20px;
      }
    }

    h2 {
      &:nth-child(n+2) {
        margin: 32px 0;
      }
    }

    p {
      line-height: 1.7em;
      font-weight: 400;
      margin: 20px 0;
    }

    li p {
      margin: 0;
    }

    .bread-crumb {
      margin-bottom: 25px;
    }

    .post-citation {
      display: block;
      margin: 10px 0;
      width: 100%;
      text-align: center;
      font-size: 15px;
      font-weight: 300;
      color: ${colors.gray};
      span {
        margin: 0;
        padding: 0 30px;
        a {
          text-decoration: none;
          color: ${colors.gray};
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

    .post-content {
      margin-top: 25px;
      padding: 20px;
    }

    @media only screen and (min-width: 1024px) {
      margin: 50px 0;

      .bread-crumb {
        margin-bottom: 50px;
      }

      .post-content {
        margin-top: 40px;
        padding: 0px;
      }
    }
  `

  return (
    <Course>
      {helmet || ''}
      <Container>
          <Link className="bread-crumb" to="/Courses">Back to Course List</Link>
            <h1 className="page-header">
              {title}
            </h1>
            {/* <div className="post-citation">
              <span>by {author || "Author"}</span>
              <p><time>{date}</time></p>
            </div>
            <CourseContent className="post-content" content={content} />
            <PostTags tags={tags} /> */}
      </Container>
    </Course>
  )
}

const Course = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CourseTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet>
          <title>{`${post.frontmatter.title} | Courses`}</title>
        </Helmet>
      }
      title={post.frontmatter.title}
    />
  )
}

export default Course

export const pageQuery = graphql`
  query CourseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`