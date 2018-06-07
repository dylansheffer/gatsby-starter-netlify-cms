import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { colors } from '../style/branding'
import Button from './Button';

const UpcomingWebinarSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: .1em;
        color: ${colors.lightGray};
    }
`

const UpcomingWebinar = ({title, date, ...props}) => (
    <UpcomingWebinarSection>
        <h1>Upcoming Webinar</h1>
        <h2>{title}</h2>
        <time>{date}</time>
        <Button>
            <Link to="/">Register</Link>
        </Button>
        {props.children}
    </UpcomingWebinarSection>
)

export default UpcomingWebinar

