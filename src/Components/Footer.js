import React from 'react'
import PropTypes from 'prop-types'

import {
  Navbar,
} from 'reactstrap'

import { IconContext } from 'react-icons'
import { FaHeart } from 'react-icons/fa'

const Footer = React.memo(function Footer(props) {
  return (
    <Navbar className="footer d-flex justify-content-center justify-content-sm-start navbar-terminal" fixed="bottom" expand="md">
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <span className="text-muted text-center text-md-left animated fadeInUp">&copy; {(new Date()).getFullYear()} &mdash; Made with <FaHeart className="text-danger animated pulse infinite"/> and React by <b>GNLC</b></span>
      </IconContext.Provider>
    </Navbar>
  )
})

Footer.propTypes = {
  data: PropTypes.object,
}

export default Footer
