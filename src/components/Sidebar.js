import React from 'react'
import styled from 'styled-components'


const SidebarStyle = styled.aside`
    flex-grow: 1;
`

const Sidebar = (props) => (
    <SidebarStyle>
        {props.children}
    </SidebarStyle>
)

export default Sidebar;