import React from 'react'
import styled from 'styled-components'

import Content, { HTMLContent } from '../components/Content'
import { colors } from '../style/branding'
import Blockquote from '../components/Blockquote'

const TestimonialTemplate = ({content, contentComponent, author}) => {
    const TestimonialContent = contentComponent || Content;
    const Testimonial = styled.div`
        max-width: 500px;
        border-top: 3px solid ${colors.lightGray};
        margin: 20px;

        cite.author {
            font-size: 17px;
            margin-left: 40px;
            &:before {
                content: "–";
                margin-right: 5px;
            }
        }
    `
    return (
        <Testimonial>
            <Blockquote>
                <TestimonialContent content={content} />
            </Blockquote>
            <cite className="author">{author}</cite>
        </Testimonial>
    )
}



const Testimonial = ({ data }) => {
    return (
        <TestimonialTemplate
        content={data.html}
        contentComponent={HTMLContent}
        author={data.frontmatter.author}
        />
    )
}

export default Testimonial