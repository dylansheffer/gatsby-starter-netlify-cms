import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default class ArticlesPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const ArticleExcerpt = styled.article`

    `

    return (
      <section>
        <div className="container">
          <div>
            <h1>Latest Articles</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article')
            .map(({ node: post }) => (
              <ArticleExcerpt key={post.id}>
                <p>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </ArticleExcerpt>
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
          }
        }
      }
    }
  }
`