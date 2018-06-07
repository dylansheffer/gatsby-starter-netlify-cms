import React from 'react'

import { colors } from '../style/branding'
import Container from '../components/Container'
import Tagline from '../components/Tagline'
import VisuallyHidden from '../components/VisuallyHidden'
import FlexContainer from '../components/FlexContainer'
import PageSection from '../components/PageSection'
import CourseBox from '../components/CourseBox'
import Button from '../components/Button'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
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