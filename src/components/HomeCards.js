import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { colors } from '../style/branding'
import FlexContainer from '../components/FlexContainer'
import Button from '../components/Button'

const HomeCardContainer = styled.div`
    flex: auto 1;
    width: 90%;
    margin: 30px;
    padding: 30px;
    background-color: white;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 0 10px 10px #eee;
    h2 {
        text-align: center;
    }

    p {
        line-height: 1.7em;
    }

    @media only screen and (min-width: 720px) {
        width: 40%;
    }
`

const UpcomingEventContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &::before {
        content: '';
        margin: 50px 0;
        width: 100%;
        border-bottom: solid 1px #ccc;
        z-index: 1;
    }

    h3 {
        font-size: 27px;
        letter-spacing: normal;
        text-transform: none;
        color: ${colors.red};
        font-weight: 400;
        margin: 0;
        &:hover {
            color: ${colors.lightRed};
        }
    }

    p {
        font-size: 1.3em;
        margin: 0;
    }

    .register-button {
        margin-top: 50px;
    }

    .request-link {
        margin: 20px 0 30px 0;
    }
`

export const CourseCard = ({ data, title, description, ...props}) => (
  <HomeCardContainer>
    <FlexContainer flexDirection="column">
        <h2 className="page-header">{title}</h2>
        <p>{description}</p>
        {props.children}
        {data ? (
            <UpcomingEventContainer>
                <Link to="/"><h3>{data.title}</h3></Link>
                <p>{data.location}</p>
                <p><time>{data.date}</time></p>
                <Button className="register-button" buttonSize="small"><Link to="/">Register</Link></Button>
                <a className="request-link" href="mailto:info@swiftkick.in">Request a workshop in my city</a>
            </UpcomingEventContainer>
        ):null}
    </FlexContainer>
  </HomeCardContainer>
)

export const SwiftKickShowCard = ({ data, title, description, ...props}) => (
    <HomeCardContainer>
        <FlexContainer flexDirection="column">
            <h2 className="page-header">{title}</h2>
            <p>{description}</p>
            {props.children}
            {data ? (
            <UpcomingEventContainer>
                <Link to="/"><h3>{data.title}</h3></Link>
                <p>{data.speaker}</p>
                <p><time>{data.date}</time> at <time>{data.time}</time></p>
                <Button className="register-button" buttonSize="small"><Link to="/">Register</Link></Button>
            </UpcomingEventContainer>
        ):null}
        </FlexContainer>
    </HomeCardContainer>
)