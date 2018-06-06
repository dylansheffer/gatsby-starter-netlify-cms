import React from 'react'
import styled from 'styled-components'

const SidebarLayout = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row-reverse;
    }
`
export default SidebarLayout;