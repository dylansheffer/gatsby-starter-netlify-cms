import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import BackgroundImage from '../img/hero.jpeg'
import Logo from '../img/logo.svg'
import Container from '../components/Container'

const desktopHeroHeight = 220;

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
        justify-content: center;
        padding: 30px;
    }

    .logo {
        max-height: 150px;
        margin: auto;
    }
    @media only screen and (min-width: 650px) {
        min-height: ${desktopHeroHeight}px;
        .hero-container {
            min-height: ${desktopHeroHeight}px;
        }
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
