import React from 'react'
import PropTypes from 'prop-types'

import "../config/global.js"

import {
  Navbar,
} from 'reactstrap'

import { IconContext } from 'react-icons'
import { FaHeart } from 'react-icons/fa'

const Footer = React.memo(function Footer(props) {
  return (
    <Navbar className="footer d-flex justify-content-center justify-content-sm-between" fixed="bottom" expand="md">
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <small className="text-muted text-center text-md-left animated fadeInUp">&copy; {(new Date()).getFullYear()} &mdash; Made with <FaHeart className="text-danger animated pulse infinite"/> and React by <b>GNLC</b></small>
      </IconContext.Provider>
      
      <small className="d-block animated fadeInUp">
        (<a href={global.githubRepo} target="_blank" rel="noopener noreferrer">{global.githubRepo}</a>)
      </small>
    </Navbar>
  )
})

Footer.propTypes = {
  data: PropTypes.object,
}

export default Footer
