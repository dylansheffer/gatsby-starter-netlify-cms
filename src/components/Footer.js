import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin }  from '@fortawesome/fontawesome-free-brands'
import { faEnvelope }  from '@fortawesome/fontawesome-free-solid'

const FooterStyle = styled.footer`
    background: black;
    color: white;
    width: 100%;
    margin: 0;
    padding: 0;

    .copyright {
        font-size: .8em;
        color: #536876;
        text-align: center;
        width: 80%;
        margin: 10px auto;
        padding: 10px 0;
    }
`

const Social = styled.div`
    h2 {
        color: #be3532;
        font-weight: 400;
        text-align: center;
        margin: 20px auto;
        font-size: 1.5em;
        margin: 30px auto 10px;
        padding: 10px 0;
    }

    .social-list {
        width: 300px;
        display: flex;
        justify-content: space-evenly;
        margin: 20px auto;
        padding: 10px 0;
        a {
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
        <div className="container">
            <Social>
                <h2>Connect With Us</h2>
                <div className="social-list">
                    <a href="mailto:info@swiftkick.in">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    <a href="https://twitter.com/teamswiftkick">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/swiftkick.training/">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/company-beta/11146423/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </Social>
            <p className="copyright" >Swift Kick provides software training and consulting services. We are based in Chesapeake, VA.</p>
        </div>
    </FooterStyle>
)

export default Footer;