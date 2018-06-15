import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {v4 as uuid} from 'uuid'


import { colors } from '../style/branding'
import Content, { HTMLContent } from '../components/Content'
import Post from '../components/Post'
import { SectionHeading, SectionSubHeading } from '../components/SectionHeading'

export const CourseTemplate = ({
  content,
  contentComponent,
  title,
  length,
  instructors,
  objectives,
  outline,
  prerequisites,
  helmet,
}) => {
  const CourseContent = contentComponent || Content

  const CourseSection = styled.section`
  width: 90%;
  margin: 30px auto;
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    width: 80%;
    margin: 50px auto;
    padding: 20px;
  }
  `

  const CourseLength = styled.div`
    font-size: 1.3em;
    margin: 40px 0;

    .label {
      color: ${colors.red};
      font-weight: 400;
    }
  `

  const Objectives = styled.div`
    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    li {
      text-indent: -2em;
      padding: 10px 25px;

      &:before {
        content: "✔️";
        padding-right: 5px;
        font-size: 20px;
      }
    }

    @media only screen and (min-width: 450px) {
      li {
        max-width: 50%;
      }
    }
    @media only screen and (min-width: 850px) {
      li {
        width: ${(1/objectives.length)*100}%;
        min-width: 150px;
        max-width: 250px;
      }
    }
  `

  const Outline = styled.div`
  `

  const Prerequisites = styled.div`
  `

  const Instructors = styled.div`
  `

  return (
    <Post postType="course" helmet={helmet}>
      <h3 aria-hidden="true">Course Details</h3>
      <h1 className="page-header">{title}</h1>
      <CourseSection>
        <SectionHeading>Course Information</SectionHeading>
        <CourseLength>
          <span className="label">Length: </span> {length}
        </CourseLength>

        <Objectives>
          <SectionSubHeading>Students Will Learn</SectionSubHeading>
          <ul>
            {objectives
              .map(objective => (
              <li key={uuid()}>{objective}</li>
            ))}
          </ul>
        </Objectives>
      </CourseSection>
      <CourseContent className="post-content" content={content} />
      <Outline>
        <ul>
            {outline
              .map(item => (
              <li key={uuid()}>{item}</li>
            ))}
        </ul>
      </Outline>
      <Prerequisites>
        <ul>
            {prerequisites
              .map(prerequisite => (
              <li key={uuid()}>{prerequisite}</li>
            ))}
        </ul>
      </Prerequisites>
      <Instructors>
        {instructors
          .map(i => (
            <div key={uuid()}>
              <div>{i.person.name}</div>
              <div>{i.person.bio}</div>
              <div>{i.person.twitter}</div>
              <img src={i.person.avatar} alt={i.person.name} />
            </div>
        ))}
      </Instructors>
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
          <meta name="description" content={post.frontmatter.description}/>
        </Helmet>
      }
      title={post.frontmatter.title}
      instructors={post.frontmatter.instructors}
      objectives={post.frontmatter.objectives}
      outline={post.frontmatter.outline}
      prerequisites={post.frontmatter.prerequisites}
      description={post.frontmatter.description}
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
        instructors{
          person {
            name
            bio
            website
            twitter
            avatar
            email
            github
            linkedin
          }
        }
        objectives
        outline
        prerequisites
        description
      }
    }
  }
`
