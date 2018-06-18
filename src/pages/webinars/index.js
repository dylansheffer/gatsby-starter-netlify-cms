import React from 'react'

import PostList from '../../components/PostList'
import Sidebar from '../../components/Sidebar';
import SidebarLayout from '../../components/SidebarLayout';
import UpcomingWebinar from '../../components/UpcomingWebinar';
import Container from '../../components/Container';


const WebinarsPage = ({ data }) => (
  <Container>
    <SidebarLayout>
      {/* <Sidebar> */}

        {/* TODO: Think about making the Upcoming Webinar the top webinar listing */}
        {/* <UpcomingWebinar title="A Test Webinar" date="June 6, 2018"> */}

        {/* </UpcomingWebinar> */}
      {/* </Sidebar> */}
      <PostList data={data} title="Latest Webinars" templateKey="webinar" />
      <div></div>
    </SidebarLayout>
  </Container>
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default WebinarsPage;