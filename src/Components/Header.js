import React, { Component } from "react"
import PropTypes from "prop-types"

import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap"

import Menu from "./Menu.js"

import { FaEllipsisV } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

import { goToTop } from "react-scrollable-anchor"

class Header extends Component {
  constructor(props) {
    super(props)

    // Reference child.
    this.menuRef = React.createRef()

    this.state = {
      isOpen: false,
    }
  }

  callback = params => {
    this.closeNav()
  }

  closeNav = () => {
    if (this.state.isOpen) this.toggleNav()
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  toTop = () => {
    goToTop()
    // Call child function.
    this.menuRef.current.setAnchor(false)
  }

  render() {
    return (
      <Navbar
        className="header navbar-terminal d-print-none"
        fixed="top"
        dark
        expand="md"
      >
        <NavbarBrand onClick={this.toTop} className="mr-4 animated fadeInLeft">
          <div className="grow">{global.brand}</div>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav}>
          {this.state.isOpen ? <FaTimes /> : <FaEllipsisV />}
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Menu
            ref={this.menuRef}
            menu={this.props.menu}
            callback={this.callback}
          />
        </Collapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
  menu: PropTypes.array,
}

export default Header
