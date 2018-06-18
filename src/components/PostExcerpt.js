import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';

import { colors } from '../style/branding'
import Button from '../components/Button'
import CardItem from '../components/CardItem'

const ArticleHeading = styled.div`
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

    @media only screen and (min-width: 900px) {
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
`

const PostExcerpt = ({ post, buttonText }) => (
    <CardItem image={post.frontmatter.image}>
        <ArticleHeading>
            <h2>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h2>
            <span>{post.frontmatter.date}</span>
        </ArticleHeading>
        <p>{post.excerpt}</p>
        <Button style={{margin: "auto 0 0"}}>
            <Link to={post.fields.slug}>{buttonText ? buttonText : "Keep Reading"}</Link>
        </Button>
    </CardItem>
)

export default PostExcerpt;