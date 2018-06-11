import React from 'react'

import Container from '../../components/Container';
import Testimonial from '../../components/Testimonial';
import FlexContainer from '../../components/FlexContainer'

const TestimonialPage = ({ data }) => (
  <Container>
        <h1 className="page-header">Testimonials</h1>
        <FlexContainer>
        {data.allMarkdownRemark.edges
            .filter(testimonial => testimonial.node.frontmatter.templateKey == 'testimonial')
            .map(({ node: testimonial }) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
          </FlexContainer>
    </Container>
)

export const pageQuery = graphql`
  query TestimonialQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            templateKey
            author
          }
        }
      }
    }
  }
`

export default TestimonialPage;