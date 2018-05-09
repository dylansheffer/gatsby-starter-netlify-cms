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
      }
    }
  }
`

const Navbar = () => (
  <Navigation>
    <ul>
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
  </Navigation>
)

export default Navbar
