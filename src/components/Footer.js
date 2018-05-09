import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    background: black;
    color: white;
`

const Footer = () => (
    <FooterStyle>
        &copy; 2018 SwiftKick
    </FooterStyle>
)

export default Footer;