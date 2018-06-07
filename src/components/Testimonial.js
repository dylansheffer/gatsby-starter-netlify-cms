import React from 'react'
import styled from 'styled-components'

import { colors } from '../style/branding'
import Blockquote from '../components/Blockquote'


const TestimonialContainer = styled.div`
    max-width: 500px;
    border-top: 3px solid ${colors.lightGray};
    margin: 20px;

    p.author {
        font-size: 17px;
        margin-left: 40px;
        &:before {
            content: "–";
            margin-right: 5px;
        }
    }
`

const Testimonial = ({author, ...props}) => (
    <TestimonialContainer>
        <Blockquote>
            {props.children}
        </Blockquote>
        <p className="author">{author}</p>
    </TestimonialContainer>
)

export default Testimonial