import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faBriefcase, faFile, faUsers, faVideo, faBars }  from '@fortawesome/fontawesome-free-solid'

import { colors } from '../style/branding'

const MinNavHeight = "60";

const Navigation = styled.nav`
  background: black;
  width: 100%;

  .nav-container {
    min-height: ${MinNavHeight}px;
    display: flex;
    flex-direction: column;
  }

  .hamburger-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: ${MinNavHeight}px;
    button {
      background: none;
      border: none;
      color: white;
      padding: 0 25px;
    }
  }
  #menu {
    margin: 0;
    padding: 0;
    display: block;
    li {
      list-style: none;
      margin: 0 auto;
      a {
        color: white;
        text-decoration: none;
        height: ${MinNavHeight}px;
        width: 100%;
        justify-content: center;
        transition: .5s all ease;
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: .1em;
        display: flex;
        align-items: center;

        &:hover {
          background: ${colors.red} !important;
        }

        svg {
          padding-right: .3em;
          font-size: 20px;
        }
      }
    }
  }
  #menu.closed {
    display: none;
  }

  @media only screen and (min-width: 720px) {
    .hamburger-container {
      display: none;
    }
    #menu.closed {
      display: flex;
    }
    #menu {
      margin: auto 0;

      li {
        a {
          padding: 0 7px;
        }
      }
    }
  }
  `

const NavLink = ({ to, activeStyle, faIcon, text, onClick }) => (
  <li onClick={onClick}>
    <Link to={to} activeStyle={activeStyle || {}}>
      <FontAwesomeIcon icon={faIcon} /> {text}
    </Link>
  </li>
)

export default class Navbar extends Component {

  constructor (props) {
    super(props);
    this.state = {
      menuClosed: true
    }
  }

  toggleMenu(menuState) {
    this.setState({menuClosed: menuState});
  }

  render() {
    return (
      <Navigation>
        <div className="nav-container container">
          <div className="hamburger-container">
            <button onClick={() => this.toggleMenu(!this.state.menuClosed)}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
          <ul id="menu" className={this.state.menuClosed ? `closed` : ''}>
            <NavLink to="/" faIcon={faHome} text="Home" onClick={() => this.toggleMenu(true)}/>
            <NavLink to="/courses" activeStyle={{backgroundColor: colors.gray}} faIcon={faListUl} text="Courses" onClick={() => this.toggleMenu(true)}/>
            <NavLink to="/consulting" activeStyle={{backgroundColor: colors.gray}} faIcon={faBriefcase} text="Consulting" onClick={() => this.toggleMenu(true)}/>
            <NavLink to="/articles" activeStyle={{backgroundColor: colors.gray}} faIcon={faFile} text="Articles" onClick={() => this.toggleMenu(true)}/>
            <NavLink to="/webinars" activeStyle={{backgroundColor: colors.gray}} faIcon={faVideo} text="Webinars" onClick={() => this.toggleMenu(true)}/>
            <NavLink to="/about" activeStyle={{backgroundColor: colors.gray}} faIcon={faUsers} text="About Us" onClick={() => this.toggleMenu(true)}/>
          </ul>
        </div>
      </Navigation>
    )
  }
}
