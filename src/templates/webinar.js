import React from 'react'
import Helmet from 'react-helmet'
import ReactModal from 'react-modal'

import Content, { HTMLContent } from '../components/Content'
import PostTags from '../components/Tags'
import Post from '../components/Post'
import AuthorList from '../components/AuthorList'
import AuthorCards from '../components/AuthorCards'
import Button from '../components/Button'

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
      <Post postType="webinar" helmet={helmet}>
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
      authors={post.frontmatter.authors}
      speakers={post.frontmatter.speakers}
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
  }
`
