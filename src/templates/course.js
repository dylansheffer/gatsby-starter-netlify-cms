import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {v4 as uuid} from 'uuid'


import { colors } from '../style/branding'
import Content, { HTMLContent } from '../components/Content'
import Post from '../components/Post'
import { SectionHeading, SectionSubHeading } from '../components/SectionHeading'
import AuthorCards from '../components/AuthorCards'
import FlexContainer from '../components/FlexContainer'
import Button from '../components/Button'


export class CourseTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { content, contentComponent, title, length, instructors, objectives, outline, prerequisites, delivery, helmet } = this.props;

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
      margin: 25px auto;
      padding: 20px;
    }
    `

    const CourseDetails = styled.div`
      font-size: 1.3em;
      margin: 0;

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
      width: 100%
      padding: 10px;
      border: 2px solid ${colors.lightGray};
      margin: 10px;

      li {
        margin: 10px 0;
        line-height: 25px;
        font-size: 18px;
        list-style: square;
      }

      @media only screen and (min-width: 650px) {
        max-width: 45%;
      }
      `

      const Prerequisites = styled.div`
      width: 100%;
      padding: 10px;
      border: 2px solid ${colors.lightGray};
      margin: 5px;

      li {
        margin: 10px 0;
        line-height: 25px;
      }

      @media only screen and (min-width: 650px) {
        max-width: 45%;
      }
      @media only screen and (min-width: 800px) {
        li{
          font-size: 18px;
        }
      }
  `

    return (
      <Post postType="course" helmet={helmet}>
        <h3 aria-hidden="true" style={{textAlign: "center"}}>Course Details</h3>
        <h1 className="page-header">{title}</h1>
        <CourseSection>
          <SectionHeading>Course Information</SectionHeading>
          <CourseDetails>
            <span className="label">Length: </span> {length} <br />
            <span className="label">Delivered: </span> {delivery}
          </CourseDetails>
          <Objectives>
            <SectionSubHeading>Students Will Learn</SectionSubHeading>
            <ul>
              {objectives
                .map(o => (
                  <li key={uuid()}>{o.objective}</li>
                ))}
            </ul>
          </Objectives>
          <Button><a style={{margin: "10px auto"}}href="mailto:info@swiftkick.in">Register</a></Button>
        </CourseSection>
        <div className="post-content">
          <SectionSubHeading>Course Description</SectionSubHeading>
          <CourseContent content={content} />
        </div>
        <FlexContainer style={{justifyContent: "space-around"}}>
          <Outline>
            <SectionSubHeading>Course Outline</SectionSubHeading>
            <ul>
                {outline.tasks
                  .map(t => (
                  <li key={uuid()}>
                    {t.task}
                    <ul>
                      {t.sub_tasks ?
                        t.sub_tasks.map(s => (
                          <li key={uuid()}>{s.sub_task}</li>
                        ))
                        : ""
                      }
                    </ul>
                  </li>
                ))}
            </ul>
          </Outline>
          <Prerequisites>
            <SectionSubHeading>Prerequisites</SectionSubHeading>
            <ul>
                {prerequisites
                  .map(p => (
                  <li key={uuid()}>{p.prerequisite}</li>
                ))}
            </ul>
          </Prerequisites>
        </FlexContainer>
        <AuthorCards authors={instructors} authorType="Instructor" authorTypePlural="Instructors" />
        <Button><a style={{margin: "10px auto"}} href="mailto:info@swiftkick.in">Register</a></Button>
      </Post>
    )
  }
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
      delivery={post.frontmatter.delivery}
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
        templateKey
        title
        description
        delivery
        length
        objectives {
          objective
        }
        prerequisites {
          prerequisite
        }
        outline {
          tasks {
            task
            sub_tasks {
              sub_task
            }
          }
        }
        instructors {
          title
          bio
          image
          website
          twitter
          email
          github
          linkedin
        }
      }
    }
  }
`
