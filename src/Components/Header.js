import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

import Menu from './Menu.js'

import { FaEllipsisV } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  callback = (params) => {
    this.closeNav()
  }

  closeNav = () => {
    if (this.state.isOpen) this.toggleNav()
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    return (
      <Navbar className="header navbar-terminal" fixed="top" dark expand="md">
        <NavbarBrand href="/" className="mr-4 animated fadeInLeft">
          <div className="grow">
            {global.brand}
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav}>
          {this.state.isOpen ? <FaTimes /> : <FaEllipsisV /> }
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Menu
            menu={this.props.menu}
            callback={this.callback} />
        </Collapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
  menu: PropTypes.array,
}

export default Header
