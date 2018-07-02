import React from 'react'
import styled from 'styled-components'

import { colors } from '../style/branding'
import { WebinarRegisterModal } from '../components/RegisterModals'

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

    h2 {
        text-align: center;
    }
`

export default class UpcomingWebinar extends React.Component {
      render() {
          const { title, date, webinarId, ...props } = this.props;

          return (
            <UpcomingWebinarSection>
                <h1>Upcoming Webinar</h1>
                <h2>{title}</h2>
                <time>{date}</time>
                {props.children}
                <WebinarRegisterModal title={title} webinarId={webinarId} />
            </UpcomingWebinarSection>
          )
      }
}

