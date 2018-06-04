import React from 'react'
import Link from 'gatsby-link'
import {PageHeader, ArticleExcerpt as WebinarExcerpt} from '../../style/articleExcerpt'

import DefaultPostImage from '../../img/placeholder.svg'

export default class WebinarsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section>
        <div className="container">
          <div>
            <PageHeader>Latest Webinars</PageHeader>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'webinar')
            .map(({ node: post }) => (
              <WebinarExcerpt key={post.id}>
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
              </WebinarExcerpt>
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