import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styledNormalize from 'styled-normalize'
import styled, { injectGlobal } from 'styled-components'
import fontawesome from '@fortawesome/fontawesome'

import 'normalize.css'
import '@fortawesome/fontawesome/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { colors, text } from '../style/branding'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Tagline from '../components/Tagline'
import Button from '../components/Button'
import Container from '../components/Container'
import FlexContainer from '../components/FlexContainer'
import PageSection from '../components/PageSection'
import SectionHeading from '../components/SectionHeading'
import NewsletterForm from '../components/NewsletterForm'

// Manually imported Font Awesome CSS to fix server-side rendering
fontawesome.config = {
	autoAddCss: false
};

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet>
      <title>Swift Kick</title>
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css' />
    </Helmet>
    <Navbar />
     {location.pathname === "/" ? (
        <Hero>
          <Tagline color={colors.lightText}>
            Swift Kick gives busy development teams necessary training and resources to keep up with the latest technology.
          </Tagline>
          <Button>
            <Link to="/courses">Our Courses</Link>
          </Button>
        </Hero>
      ) : (
        <Hero />
      )}
    <div>{children()}</div>
    {/* Newletter Section */}
    <PageSection backgroundColor={colors.offWhite}>
          <Container>
            <FlexContainer flexDirection="column">
              <h3 aria-hidden="true" style={{textAlign: "center"}}>Subscribe</h3>
              <SectionHeading>
                Stay up-to-date on our latest courses, articles and more!
              </SectionHeading>
              <NewsletterForm />
            </FlexContainer>
          </Container>
        </PageSection>
    <Footer />
  </div>
)

injectGlobal`
${styledNormalize}

* {
  box-sizing: border-box;
}

body {
  font-family: ${text.sansSerif};
  color: ${colors.gray};
}

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

li {
  line-height: 1.4em;
  margin: 10px 0;
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

export default TemplateWrapper
