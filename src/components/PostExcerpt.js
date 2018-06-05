import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';

import DefaultPostImage from '../img/placeholder.svg'

const PostExcerptListing = styled.article`
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
        margin: auto 0 0;
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
        height: 250px;

        .featured-image {
            width: auto;
            height: 100%;
            margin-right: 50px;
            align-self: center;
        }

        .article-content {
            align-items: normal;
            width: 100%;
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
        <img className="featured-image" src={post.image || DefaultPostImage} alt=""/>
        <div className="article-content">
            <div className="article-heading">
                <h2>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <span>{post.frontmatter.date}</span>
            </div>
            <p>{post.excerpt}</p>
            <Link className="button" to={post.fields.slug}>Keep Reading</Link>
        </div>
    </PostExcerptListing>
)

export default PostExcerpt;