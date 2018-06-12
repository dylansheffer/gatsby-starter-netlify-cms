import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'


import { colors } from '../style/branding'
import Content, { HTMLContent } from '../components/Content'
import Post from '../components/Post'

export const CourseTemplate = ({
  content,
  contentComponent,
  title,
  length,
  helmet,
}) => {
  const CourseContent = contentComponent || Content

  const CourseLength = styled.div`
    .label {
      color: ${colors.red};
      font-weight: 400;
    }
  `

  return (
    <Post postType="course" helmet={helmet}>
      <h3 aria-hidden="true">Course Details</h3>
      <h1 className="page-header">
        {title}
      </h1>
      <CourseLength>
        <span className="label">Length: </span> {length}
      </CourseLength>
      <CourseContent className="post-content" content={content} />
    </Post>
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
      length={post.frontmatter.length}
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
        length
      }
    }
  }
`
