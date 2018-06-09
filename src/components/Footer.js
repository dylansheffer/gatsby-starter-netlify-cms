import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin }  from '@fortawesome/fontawesome-free-brands'
import { faEnvelope }  from '@fortawesome/fontawesome-free-solid'

import { colors } from '../style/branding'
import Container from '../components/Container'

const FooterStyle = styled.footer`
    background: black;
    color: white;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    .copyright {
        font-size: .8em;
        color: ${colors.gray};
        text-align: center;
        width: 80%;
        margin: 10px auto;
        padding: 10px 0;
    }
`

const Social = styled.div`
    .social-header {
        color: ${colors.red};
        font-weight: 400;
        text-align: center;
        font-size: 1.5em;
        margin: 0 auto 10px;
        padding: 10px 0;
    }

    .social-list {
        width: 300px;
        display: flex;
        justify-content: space-evenly;
        margin: 20px auto;
        padding: 10px 0;
        .social-icon {
            color: white;
            &:hover {
                background-color: #000;
                opacity: 0.6;
                -webkit-transition: .5s all ease;
                -moz-transition: .5s all ease;
                transition: .5s all ease;
            }
        }
    }
`

const Footer = () => (
    <FooterStyle>
        <Container>
            <Social>
                <h2 className="social-header">Connect With Us</h2>
                <div className="social-list">
                    <a className="social-icon" href="mailto:info@swiftkick.in">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    <a className="social-icon" href="https://twitter.com/teamswiftkick">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a className="social-icon" href="https://www.facebook.com/swiftkick.training/">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a className="social-icon" href="https://www.linkedin.com/company-beta/11146423/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </Social>
            <p className="copyright" >Swift Kick provides software training and consulting services. We are based in Chesapeake, VA.</p>
        </Container>
    </FooterStyle>
)

export default Footer;