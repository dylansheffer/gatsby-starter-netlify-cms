import React from 'react'
import Helmet from 'react-helmet'

import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'
import Post from '../components/Post'

export const WebinarTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  authors,
  speakers,
  date,
  helmet,
}) => {
  const WebinarContent = contentComponent || Content

  return (
    <Post postType="webinar" helmet={helmet}>
        <h1 className="page-header">
          {title}
        </h1>
        <div className="post-citation">
          {/* TODO: Add Link to author page when after I generate them */}
          {/* <span>by <a href="http://" rel="author">{author || "Author"}</a></span> */}
          {/* <span>by {author || "Author"}</span> */}
          <p><time>{date}</time></p>
        </div>
        <WebinarContent content={content} />
        <PostTags tags={tags} />
    </Post>
  )
}

const Webinar = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <WebinarTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet>
          <title>{`${post.frontmatter.title} | Webinars`}</title>
          <meta name="description" content={post.frontmatter.description}/>
        </Helmet>
      }
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      // author={post.frontmatter.author}
      date={post.frontmatter.date}
    />
  )
}

export default Webinar

export const pageQuery = graphql`
  query WebinarByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
