import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Container from '../../components/Container';
import Testimonial from '../../components/Testimonial';
import FlexContainer from '../../components/FlexContainer'

const TestimonialConainer = styled(Container)`
  margin: 25px auto;
`

const TestimonialPage = ({ data }) => (
  <TestimonialConainer>
    <Link className="bread-crumb" to="/">Back to Home</Link>
    <h1 className="page-header">Testimonials</h1>
    <FlexContainer>
    {data.allMarkdownRemark.edges
        .filter(testimonial => testimonial.node.frontmatter.templateKey == 'testimonial')
        .map(({ node: testimonial }) => (
        <Testimonial key={testimonial.id} data={testimonial} />
      ))}
      </FlexContainer>
  </TestimonialConainer>
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