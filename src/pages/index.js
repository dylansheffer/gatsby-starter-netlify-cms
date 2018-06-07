import React from 'react'
import Link from 'gatsby-link'

import { colors } from '../style/branding'
import Container from '../components/Container'
import Tagline from '../components/Tagline'
import VisuallyHidden from '../components/VisuallyHidden'
import FlexContainer from '../components/FlexContainer'
import PageSection from '../components/PageSection'

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
