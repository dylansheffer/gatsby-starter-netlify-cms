import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faBriefcase, faFile, faUsers, faVideo }  from '@fortawesome/fontawesome-free-solid'


const Navigation = styled.nav`
  display: flex;
  background: black;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
        margin: 10px;
        padding: 10px;
        svg {
          // width: 1.125em !important;
        }
      }
    }
  }
`

const Navbar = () => (
  <Navigation>
    <ul>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="sm" /> Home
          {/* <i className="fas fa-home"></i> Home */}
        </Link>
      </li>
      <li>
        <Link to="/courses">
          <FontAwesomeIcon icon={faListUl} size="sm" /> Courses
          {/* <i className="fas fa-list-ul"></i> Courses */}
        </Link>
      </li>
      <li>
        <Link to="/consulting">
          <FontAwesomeIcon icon={faBriefcase} size="sm" /> Consulting
          {/* <i className="fas fa-briefcase"></i> Consulting */}
        </Link>
      </li>
      <li>
        <Link to="/articles">
          <FontAwesomeIcon icon={faFile} size="sm" /> Articles
          {/* <i className="fas fa-file"></i> Articles */}
        </Link>
      </li>
      <li>
        <Link to="/webinars">
          <FontAwesomeIcon icon={faVideo} size="sm" /> Webinars
          {/* <i className="fas fa-video"></i> Webinars */}
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FontAwesomeIcon icon={faUsers} size="sm" /> About Us
          {/* <i className="fas fa-users"></i> About Us */}
        </Link>
      </li>
    </ul>
  </Navigation>
)

export default Navbar
