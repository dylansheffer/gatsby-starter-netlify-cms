import React from 'react'
import styled from 'styled-components'

import UpcomingWebinar from '../components/UpcomingWebinar'

const SideBar = styled.aside`
  @media only screen and (min-width: 1024px) {
    margin: 100px 0 0 40px;
  }
`

export const UpcomingWebinarSidebar = ({ title, date }) => (
  <SideBar>
    <UpcomingWebinar title={title} date={date} />
  </SideBar>
);