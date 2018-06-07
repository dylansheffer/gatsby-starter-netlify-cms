import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import BackgroundImage from '../img/hero.jpeg'
import Logo from '../img/logo.svg'
import Container from '../components/Container'

const HeroStyle = styled.div`
    width: 100%;
    background: linear-gradient(
        rgba(20,20,20, .8),
        rgba(20,20,20, .8)),
        url(${BackgroundImage});
    background-size: cover;

    .hero-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 700px;
        padding: 30px;
    }

    .logo {
        max-height: 150px;
        margin: auto;
    }
`

const Hero = (props) => (
  <HeroStyle>
      <Container>
        <div className="hero-container">
            <img className="logo" src={Logo} alt="SwiftKick Logo"/>
            {props.children}
        </div>
      </Container>
  </HeroStyle>
)

export default Hero
