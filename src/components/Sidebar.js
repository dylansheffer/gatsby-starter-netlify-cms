import React from 'react'
import styled from 'styled-components'

import UpcomingWebinar from '../components/UpcomingWebinar'

const SideBar = styled.aside`
  @media only screen and (min-width: 1000px) {
    margin: 50px 20px 0 0;
  }
`

export const UpcomingWebinarSidebar = ({ title, date }) => (
  <SideBar>
    <UpcomingWebinar title={title} date={date} />
  </SideBar>
);