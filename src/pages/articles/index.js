import React from 'react'
import Link from 'gatsby-link'
import {PageHeader, ArticleExcerpt} from '../../style/articleExcerpt'

import DefaultPostImage from '../../img/placeholder.svg'

export default class ArticlesPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <div className="container">
          <PageHeader>Articles</PageHeader>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'article')
            .map(({ node: post }) => (
              <ArticleExcerpt key={post.id}>
                <img className="featured-image" src={post.image || DefaultPostImage} alt=""/>
                <div className="article-content">
                  <div className="article-heading">
                    <h2>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <span>
                      {post.frontmatter.date}
                    </span>
                  </div>
                  <p>
                    {post.excerpt}
                  </p>
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading
                  </Link>
                </div>
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
            image
          }
        }
      }
    }
  }
`