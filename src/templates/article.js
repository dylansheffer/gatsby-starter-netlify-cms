import React from 'react'
import Helmet from 'react-helmet'


import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'
import Post from '../components/Post'

export const ArticleTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  author,
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
        {/* TODO: Add Link to author page when after I generate them */}
        {/* <span>by <a href="http://" rel="author">{author || "Author"}</a></span> */}
        <span>by {author || "Author"}</span>
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
      author={post.frontmatter.author}
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
        author
        title
        description
        tags
      }
    }
  }
`
