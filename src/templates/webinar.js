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

export class WebinarTemplate extends React.Component {

  componentWillMount() {
    ReactModal.setAppElement('body')
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    const { content, contentComponent, tags, title, authors, speakers, date, helmet } = this.props;

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
          <Button><button style={{margin: "10px auto"}} onClick={this.handleOpenModal}>Register</button></Button>
          <AuthorCards authors={speakers} authorType="Speaker" authorTypePlural="Speakers" />
          <PostTags tags={tags} />
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Register for Course"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
          >
            <Button><button onClick={this.handleCloseModal}>Close Modal</button></Button>
          </ReactModal>
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
        webinarId
        description
        tags
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
