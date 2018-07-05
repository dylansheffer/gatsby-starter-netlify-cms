import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

import { colors } from '../style/branding'
import Container from '../components/Container'
import Tagline from '../components/Tagline'
import VisuallyHidden from '../components/VisuallyHidden'
import FlexContainer from '../components/FlexContainer'
import PageSection from '../components/PageSection'
import { CourseCard, SwiftKickShowCard } from '../components/HomeCards'
import Button from '../components/Button'
import Testimonial from '../components/Testimonial'
import SectionHeading from '../components/SectionHeading'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const UpcomingSwiftKickShows = posts.filter(webinar => webinar.node.frontmatter.templateKey == 'webinar').slice(0, 1)
    .map(({ node: webinar }) => (
    {
      title: webinar.frontmatter.title,
      speakers: webinar.frontmatter.speakers,
      date: moment(webinar.frontmatter.date).format('MM/DD/YYYY'),
      time: moment(webinar.frontmatter.date).format('hh:mm a'),
      description: webinar.frontmatter.description,
      link: webinar.fields.slug
    }
    ));

    const UpcomingCourses = posts.filter(course => course.node.frontmatter.templateKey == 'course').slice(0, 1)
    .map(({ node: course }) => (
    {
      title: course.frontmatter.title,
      description: course.frontmatter.description,
      link: course.fields.slug
    }
    ));

    return (
      <div>
        <PageSection backgroundColor={colors.offWhite}>
          <Container>
            <FlexContainer flexDirection="column">
              <VisuallyHidden>
                <h1>Training Services</h1>
              </VisuallyHidden>
              <Tagline>
                Technology moves fast. Does your team have the resources they need to keep up, or will your projects fall behind?
              </Tagline>
              <FlexContainer >
                <CourseCard title="Upcoming Training" description="If you have a smaller team, the cost of providing customized training can be a limiting factor. Swift Kick offers public training courses throughout the United States." data={UpcomingCourses[0]}/>
                <SwiftKickShowCard title="Swift Kick Show" description="The Swift Kick Show is a webinar series that brings in industry experts to share their knowledge for free." data={UpcomingSwiftKickShows[0]}>
                  <Button buttonSize="small" style={{alignSelf: 'center'}}><a href="https://www.youtube.com/channel/UC3iCOs_7lQ85OWOy6lhy4_g/featured">View the Catalog</a></Button>
                </SwiftKickShowCard>
              </FlexContainer>
            </FlexContainer>
          </Container>
        </PageSection>

        {/* Testimonial Section */}
        <PageSection>
          <Container>
            <FlexContainer flexDirection="column">
              <SectionHeading>Testimonials</SectionHeading>
              <FlexContainer style={{margin: '20px 0'}}>
                {posts
                  .filter(testimonial => testimonial.node.frontmatter.templateKey == 'testimonial').slice(0, 4)
                  .map(({ node: testimonial }) => (
                  <Testimonial key={testimonial.id} data={testimonial} />
                ))}
              </FlexContainer>
              <Button style={{alignSelf: 'center'}}><Link to="/testimonials">More Testimonials</Link></Button>
              </FlexContainer>
              </Container>
        </PageSection>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            description
            speakers {
              title
            }
          }
        }
      }
    }
  }
`