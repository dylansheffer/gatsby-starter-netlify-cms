import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import DefaultPostImage from '../../img/placeholder.svg'

export default class ArticlesPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const PageHeader = styled.h1`
      color: #536876;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
    `

    const ArticleExcerpt = styled.article`
      display: flex;
      flex-direction: column;
      margin: 50px 20px;

      .featured-image {
        width: 100%;
      }

      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .article-heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          margin: 5px 0;
          text-align: center;
          a {
            font-family: 'Open Sans', Helvetica, Arial, sans-serif;
            color: #536876;
            font-size: 24px;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        span {
          font-style: italic;
        }
      }

      .button {
        width: 220px;
        border-radius: 80px;
        padding: 22px;
        display: block;
        background-color: #be3532;
        color: white;
        text-align: center;
        text-decoration: none;
        transition: .5s all ease;
        &:hover {
          background-color: #d15452;
          text-decoration: underline;
        }
      }
      @media only screen and (min-width: 900px) {
        flex-direction: row;

        .featured-image {
          width: 30%;
          height: 30%;
          margin-right: 50px;
          align-self: center;
        }

        .article-content {
          align-items: normal;
        }

        .article-heading {
          flex-direction: row;
          align-items: center;
          h2 {
            text-align: left;
          }
          span {
            font-style: italic;
            justify-self: end;
            margin: auto 0 auto auto;
          }
        }
      }


    `

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