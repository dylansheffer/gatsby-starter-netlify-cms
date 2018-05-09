import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'
import { colors, text } from '../style/branding'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GlobalStyles = styled.div`
  font-family: ${text.sansSerif};
`

const TemplateWrapper = ({ children }) => (
  <GlobalStyles>
    <Helmet>
      <title>SwiftKick</title>
      <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />>
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </GlobalStyles>
)

export default TemplateWrapper
