import React from 'react'
import PostList from '../../components/PostList'

const WebinarsPage = ({ data }) => (
  <PostList data={data} title="Latest Webinars" templateKey="webinar" />
)

export const pageQuery = graphql`
  query WebinarsQuery {
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

export default WebinarsPage;