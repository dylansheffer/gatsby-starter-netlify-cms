import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faBriefcase, faFile, faUsers, faVideo, faBars }  from '@fortawesome/fontawesome-free-solid'

const MinNavHeight = "50";

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
      display: flex;
      width: 100%;
      padding: 10px 0;
      justify-content: center;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  #menu.closed {
    display: none;
  }

  @media only screen and (min-width: 650px) {
    .hamburger-container {
      display: none;
    }
    #menu.closed {
      display: flex;
    }
    #menu {
      margin: auto 0;
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
          console.log(menu);
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
          <Link to="/courses">
            <FontAwesomeIcon icon={faListUl} /> Courses
          </Link>
        </li>
        <li>
          <Link to="/consulting">
            <FontAwesomeIcon icon={faBriefcase} /> Consulting
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <FontAwesomeIcon icon={faFile} /> Articles
          </Link>
        </li>
        <li>
          <Link to="/webinars">
            <FontAwesomeIcon icon={faVideo} /> Webinars
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faUsers} /> About Us
          </Link>
        </li>
      </ul>
    </div>
  </Navigation>
)

export default Navbar
