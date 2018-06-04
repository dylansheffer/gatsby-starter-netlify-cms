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

  img {
    max-width: 100%;
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
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
