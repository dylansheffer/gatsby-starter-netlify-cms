import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faBriefcase, faFile, faUsers, faVideo, faBars }  from '@fortawesome/fontawesome-free-solid'

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
          background: #be3532 !important;
        }
        
        svg {
          padding-right: .3em;
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
  
  
let menuClosed = true;

const Navbar = () => (
  <Navigation>
    <div className="nav-container container">
      <div className="hamburger-container">
        <button onClick={() => {
          const menu = document.querySelector("#menu");
          menuClosed = !menuClosed;
          menuClosed ? menu.classList.add("closed") : menu.classList.remove("closed");
          }}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>
      <ul id="menu" className="closed">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link to="/courses" activeStyle={{backgroundColor: '#3e5463'}}>
            <FontAwesomeIcon icon={faListUl} /> Courses
          </Link>
        </li>
        <li>
          <Link to="/consulting" activeStyle={{backgroundColor: '#3e5463'}}>
            <FontAwesomeIcon icon={faBriefcase} /> Consulting
          </Link>
        </li>
        <li>
          <Link to="/articles" activeStyle={{backgroundColor: '#3e5463'}}>
            <FontAwesomeIcon icon={faFile} /> Articles
          </Link>
        </li>
        <li>
          <Link to="/webinars" activeStyle={{backgroundColor: '#3e5463'}}>
            <FontAwesomeIcon icon={faVideo} /> Webinars
          </Link>
        </li>
        <li>
          <Link to="/about" activeStyle={{backgroundColor: '#3e5463'}}>
            <FontAwesomeIcon icon={faUsers} /> About Us
          </Link>
        </li>
      </ul>
    </div>
  </Navigation>
)

export default Navbar
