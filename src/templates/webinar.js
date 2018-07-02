import React from 'react'
import Helmet from 'react-helmet'
import ReactModal from 'react-modal'

import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'
import Post from '../components/Post'
import AuthorList from '../components/AuthorList'
import AuthorCards from '../components/AuthorCards'
import Button from '../components/Button'
import { UpcomingWebinarSidebar } from '../components/Sidebar'
import FlexContainer from '../components/FlexContainer'
import { WebinarRegisterModal } from '../components/RegisterModals'

export class WebinarTemplate extends React.Component {
  render() {
    const { content, contentComponent, tags, title, authors, speakers, date, helmet, webinarId } = this.props;

    const WebinarContent = contentComponent || Content;

    return (
      <Post className="sidebar" postType="webinar" helmet={helmet}>
          <h1 className="page-header">
            {title}
          </h1>
          <div className="post-citation">
            <AuthorList authors={authors} />
            <p><time>{date}</time></p>
          </div>
          <WebinarContent content={content} />
          <WebinarRegisterModal title={title} webinarId={webinarId} />
          <AuthorCards authors={speakers} authorType="Speaker" authorTypePlural="Speakers" />
          <PostTags tags={tags} />
      </Post>
    )
  }
}

const Webinar = ({ data }) => {
  const { webinar , webinars  } = data;
  const upcomingWebinar = webinars.edges[0].node;
  return (
    <FlexContainer>
      <WebinarTemplate
      content={webinar.html}
      contentComponent={HTMLContent}
      description={webinar.frontmatter.description}
      helmet={
        <Helmet>
            <title>{`${webinar.frontmatter.title} | Webinars`}</title>
            <meta name="description" content={webinar.frontmatter.description}/>
          </Helmet>
        }
        tags={webinar.frontmatter.tags}
        title={webinar.frontmatter.title}
        authors={webinar.frontmatter.authors}
        speakers={webinar.frontmatter.speakers}
        date={webinar.frontmatter.date}
        webinarId={webinar.frontmatter.webinarId}
        />
        <UpcomingWebinarSidebar
          title={upcomingWebinar.frontmatter.title}
          date = {upcomingWebinar.frontmatter.date}
          webinarId = {upcomingWebinar.frontmatter.webinarId}
        />
    </FlexContainer>
  )
}

export default Webinar

export const pageQuery = graphql`
  query WebinarByID($id: String!) {
    webinar: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        webinarId
        authors {
          title
        }
        speakers {
          title
          bio
          image
          website
          email
          github
          linkedin
          twitter
        }
      }
    }

    webinars: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/webinars/"} },
      sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            webinarId
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
