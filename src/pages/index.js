import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from '../style/branding'
import Container from '../components/Container'
import Tagline from '../components/Tagline'
import VisuallyHidden from '../components/VisuallyHidden'
import FlexContainer from '../components/FlexContainer'
import PageSection from '../components/PageSection'
import CourseBox from '../components/CourseBox'
import Button from '../components/Button'
import Testimonial from '../components/Testimonial'
import SectionHeading from '../components/SectionHeading'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {/* Training Section */}
        <PageSection backgroundColor={colors.offWhite}>
          <Container>
            <FlexContainer flexDirection="column">
              <VisuallyHidden>
                <h1>Training Services</h1>
              </VisuallyHidden>
              <Tagline>
                Technology moves fast. Does your team have the resources they need to keep up, or will your projects fall behind?
              </Tagline>
              <FlexContainer style={{alignItems: "flex-start"}}>
                <CourseBox title="Public Training" description="If you have a smaller team, the cost of providing customized training can be a limiting factor. Swift Kick offers public training courses throughout the United States." data={{title: "Docker Workshop", location: "Richmond, VA USA", date: "July 27-28, 2017"}}/>

                <CourseBox title="Custom Training" description="For larger teams, we offer a variety of customized training curriculums. Contact us for more information about your needs.">
                  <Button buttonSize="small" style={{alignSelf: 'center'}}><a href="mailto:info@swiftkick.in">Contact Us</a></Button>
                </CourseBox>
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
                <Testimonial author="Homer Simpson">
                  Heated and irritated as he was by his spasmodic toil at the pumps, for all his first nameless feeling of forbearance the sweating Steelkilt could but ill brook this bearing in the mate.
                </Testimonial>
                <Testimonial author="Homer Simpson">
                  Heated and irritated as he was by his spasmodic toil at the pumps, for all his first nameless feeling of forbearance the sweating Steelkilt could but ill brook this bearing in the mate.
                </Testimonial>
                <Testimonial author="Homer Simpson">
                  Heated and irritated as he was by his spasmodic toil at the pumps, for all his first nameless feeling of forbearance the sweating Steelkilt could but ill brook this bearing in the mate.
                </Testimonial>
                <Testimonial author="Homer Simpson">
                  Heated and irritated as he was by his spasmodic toil at the pumps, for all his first nameless feeling of forbearance the sweating Steelkilt could but ill brook this bearing in the mate.
                </Testimonial>
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
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`