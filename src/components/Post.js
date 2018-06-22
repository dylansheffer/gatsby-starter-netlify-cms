import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from '../style/branding'
import Container from '../components/Container'

const Post = ({postType, helmet, ...props}) => (
    <PostStyle style={props.style} className={props.className}>
      {helmet || ''}
      <Container>
        <Link className="bread-crumb" to={`/${postType.toLowerCase()}s`}>Back to {postType.charAt(0).toUpperCase() + postType.slice(1)} List</Link>
        {props.children}
      </Container>
    </PostStyle>
)

const PostStyle = styled.article`
    padding: 10px 5px;

    blockquote {
      display: block;
      background: ${colors.offWhite};
      padding: 15px 20px 15px 60px;
      margin: 0;
      text-align: left;
      border-left: 3px solid ${colors.lightGray};
      position: relative;
      font-size: 1.3em;

      ::before {
        content: "\\201C";
        font-family: Georgia, serif;
        font-size: 60px;
        font-weight: bold;
        color: ${colors.lightGray};
        position: absolute;
        left: 10px;
        top: 20px;
      }
    }

    p {
      line-height: 1.7em;
      font-weight: 400;
      margin: 20px 0;
    }

    li p {
      margin: 0;
    }

    .bread-crumb {
      margin-bottom: 25px;
    }

    .post-citation {
      display: block;
      margin: 10px 0;
      width: 100%;
      text-align: center;
      font-size: 15px;
      font-weight: 300;
      color: ${colors.gray};
      span {
        margin: 0;
        padding: 0 30px;
        a {
          text-decoration: none;
          color: ${colors.gray};
        }
      }
      time {
        padding: 0 30px;
      }
      p {
        margin: 0;
        display: inline;
        ::before {
          content: "|";
        }
      }
    }

    .post-content {
      margin-top: 25px;
    }


    @media only screen and (min-width: 1024px) {
      &&&.sidebar {
        width: 65%;
      }
    }
    @media only screen and (min-width: 720px) {
      margin: 20px;

      .bread-crumb {
        margin-bottom: 50px;
      }

      .post-content {
        margin-top: 40px;
        padding: 20px;
      }
    }
  `

  export default Post;