import React from 'react'

import PostList from '../../components/PostList';
import Container from '../../components/Container';

const CoursesPage = ({ data }) => (
    <Container>
      <PostList data={data} title="Courses" templateKey="course" buttonText="Details" />
    </Container>
)

export const pageQuery = graphql`
  query CoursesQuery {
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
            image
          }
        }
      }
    }
  }
`

export default CoursesPage;