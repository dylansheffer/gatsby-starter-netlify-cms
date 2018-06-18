import React from 'react'
import Helmet from 'react-helmet'


import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'
import Post from '../components/Post'
import AuthorList from '../components/AuthorList'

export const ArticleTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  authors,
  date,
  helmet,
}) => {
  const ArticleContent = contentComponent || Content

  return (
    <Post postType="article" helmet={helmet}>
      <h1 className="page-header">
        {title}
      </h1>
      <div className="post-citation">
        <AuthorList authors={authors} />
        <p><time>{date}</time></p>
      </div>
      <ArticleContent className="post-content" content={content} />
      <PostTags tags={tags} />
    </Post>
  )
}

const Article = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ArticleTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={
        <Helmet>
          <title>{`${post.frontmatter.title} | Articles`}</title>
          <meta name="description" content={post.frontmatter.description}/>
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      authors={post.frontmatter.authors}
      date={post.frontmatter.date}
    />
  )
}

export default Article

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        authors {
          title
        }
        title
        description
        tags
      }
    }
  }
`
