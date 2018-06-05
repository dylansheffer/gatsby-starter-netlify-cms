import React from 'react'
import Link from 'gatsby-link'
import ArticleExcerpt from '../../components/ArticleExcerpt'

export default class WebinarsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <div className="container">
          <h2 className="page-header">Latest Webinars</h2>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'webinar')
            .map(({ node: post }) => (
              <ArticleExcerpt key={post.id} post={post} />
            ))}
        </div>
      </section>
    )
  }
}

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