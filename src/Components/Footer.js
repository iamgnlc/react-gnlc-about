import React from 'react'
import PropTypes from 'prop-types'

import "../config/global.js"

import {
  Navbar,
} from 'reactstrap'

import { IconContext } from 'react-icons'
import { FaHeart, FaCopyright, FaGithub, FaReact } from 'react-icons/fa'

const Footer = React.memo(function Footer(props) {
  return (
    <Navbar className="footer d-flex justify-content-center justify-content-sm-between" fixed="bottom" expand="md">
      <small className="text-muted text-center text-md-left d-flex align-items-center animated fadeInUp">
        <IconContext.Provider value={{ className: "mr-1" }}>
          <FaCopyright />
        </IconContext.Provider>
        {(new Date()).getFullYear()} &mdash; Made with
        <IconContext.Provider value={{ className: "text-danger animated pulse infinite mx-1" }}>
          <FaHeart />
        </IconContext.Provider>
        and React
        <IconContext.Provider value={{ className: "text-primary mx-1" }}>
          <FaReact />
        </IconContext.Provider>
        &mdash; by <b className="ml-1">GNLC</b>
      </small>
      
      <small className="d-flex align-items-center animated fadeInUp">
        <IconContext.Provider value={{ className: "mr-1" }}>
          <FaGithub />
        </IconContext.Provider>
        <a href={global.githubRepo} target="_blank" rel="noopener noreferrer">{global.githubRepo}</a>
      </small>
    </Navbar>
  )
})

Footer.propTypes = {
  data: PropTypes.object,
}

export default Footer
