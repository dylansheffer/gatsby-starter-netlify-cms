import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'
import 'normalize.css'
import '@fortawesome/fontawesome/styles.css'
import { colors, text } from '../style/branding'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

// Manually imported Font Awesome CSS to fix server-side rendering
fontawesome.config = {
	autoAddCss: false
};

const GlobalStyles = styled.div`
  font-family: ${text.sansSerif};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.gray};

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .1em;
    color: ${colors.lightGray};
  }

  p {
    font-size: 16px;
  }

  a {
    color: ${colors.red};
    :hover {
      text-decoration: underline !important;
      color: ${colors.lightRed};
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-header, h1, h2 {
    color: ${colors.gray};
    font-weight: 500;
  }
`

const TemplateWrapper = ({ children }) => (
  <GlobalStyles>
    <Helmet>
      <title>Swift Kick</title>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />
    </Helmet>
    <Navbar />
    <Hero />
    <div>{children()}</div>
    <Footer />
  </GlobalStyles>
)

export default TemplateWrapper
