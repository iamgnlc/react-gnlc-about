import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import scrollToComponent from 'react-scroll-to-component'

import { FaBars } from 'react-icons/fa'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      dropdown: this.props.dropdown,
      dropdownOpen: false,
      isOpen: false,
    }
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

      
      <Navbar className="header" color="primary" fixed="top" dark expand="sm">
        <NavbarBrand href="/" className="mr-4 animated fadeInLeft">
          {this.state.data.fullName}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav}>
          <FaBars />
        </NavbarToggler>

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto animated fadeIn" navbar>
            <UncontrolledDropdown nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle nav className="p-0 py-xs-2">
                Select {this.state.dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
              </DropdownToggle>
              <DropdownMenu>
                {this.state.dropdown.map((item, key) => {
                  return <DropdownItem onClick={() => { scrollToComponent(item.ref, { offset: -global.topOffset, align: 'top'})}} key={key}>{item.name}</DropdownItem>  
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>

        <h6 className="text-light animated fadeInRight d-none d-sm-block m-0">{this.state.data.jobRole}</h6>
      </Navbar>
    )
  }
}

export default Header
