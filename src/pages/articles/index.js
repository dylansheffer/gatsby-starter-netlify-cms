import React from 'react'
import ArticleExcerpt from '../../components/ArticleExcerpt'



export default class ArticlesPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <div className="container">
          <h2 className="page-header">Articles</h2>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article')
            .map(({ node: post }) => (
              <ArticleExcerpt key={post.id} post={post} />
            ))}
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query ArticlesQuery {
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