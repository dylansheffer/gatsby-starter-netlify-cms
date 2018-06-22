import React from 'react'

import PostList from '../../components/PostList'
import { UpcomingWebinarSidebar } from '../../components/Sidebar'
import Container from '../../components/Container';
import FlexContainer from '../../components/FlexContainer'


const WebinarsPage = ({ data }) => (
  <FlexContainer>
    <Container>
        <PostList
          data={data}
          title="Latest Webinars"
          templateKey="webinar"
          buttonText="Details"
        >
          <UpcomingWebinarSidebar title="A Test Webinar" date="June 6, 2018" />
        </PostList>
    </Container>
  </FlexContainer>

)

export const webinarQuery = graphql`
  query WebinarsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/webinars/"} },
      sort: { order: DESC, fields: [frontmatter___date] }) {
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
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default WebinarsPage;