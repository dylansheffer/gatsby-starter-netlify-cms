import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import BackgroundImage from '../img/hero.jpeg'
import Logo from '../img/logo.svg'

const HeroStyle = styled.div`
    display: none;
    width: 100%;
    background: linear-gradient(
        rgba(20,20,20, .8),
        rgba(20,20,20, .8)),
        url(${BackgroundImage});
    background-size: cover;

    .hero-container {
        height: 40vh;
        max-height: 700px;
    }

    .logo {
        max-height: 150px;
        margin: auto;
    }

    @media only screen and (min-width: 650px) {
        display: block;
        .hero-container {
            display: flex;
            // align-items: center;
            // justify-content: center;
        }
    }
`

const Hero = () => (
  <HeroStyle>
      <div className="container hero-container">
        <img className="logo" src={Logo} alt="SwiftKick Logo"/>
      </div>
  </HeroStyle>
)

export default Hero
