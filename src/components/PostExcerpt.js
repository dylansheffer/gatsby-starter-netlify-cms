import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';

import DefaultPostImage from '../img/placeholder.svg'
import { colors } from '../style/branding'
import Button from '../components/Button'

const PostExcerptListing = styled.article`
    display: flex;
    flex-direction: column;
    margin: 50px 20px;

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
            color: ${colors.gray};
            font-size: 24px;
            text-decoration: none;
            }
        }
        span {
            font-style: italic;
        }
    }

    .button {
        margin: auto 0 0;
    }

    .post-image {
        background-size: cover;
        width: 300px;
        height: 250px;
        align-self: center;
        margin: auto 0;
    }

    @media only screen and (min-width: 900px) {
        flex-direction: row;
        height: 250px;

        .post-image {
            margin-right: 50px;
        }

        .article-content {
            align-items: normal;
            width: calc(100% - 300px);
            height: 100%;
        }

        .article-heading {
            flex-direction: row;
            align-items: center;
            h2 {
            text-align: left;
            width: 70%;
            }
            span {
            font-style: italic;
            justify-self: end;
            margin: auto 0 auto auto;
            }
        }
    }
`

const PostExcerpt = ({ post }) => (
    <PostExcerptListing>
        <div className="post-image"style={{backgroundImage: `url(${post.frontmatter.image || DefaultPostImage})`}}></div>
        <div className="article-content">
            <div className="article-heading">
                <h2>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <span>{post.frontmatter.date}</span>
            </div>
            <p>{post.excerpt}</p>
            <Button className="button">
                <Link to={post.fields.slug}>Keep Reading</Link>
            </Button>
        </div>
    </PostExcerptListing>
)

export default PostExcerpt;