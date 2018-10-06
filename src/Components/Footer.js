import React, { Component } from 'react'

import {
  Navbar,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import { IconContext } from 'react-icons'
import { FaHeart } from 'react-icons/fa'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      dropdownOpen: false
    }
  }

  // toggle = () => {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  // }

  render() {
    return (
      <Navbar className="footer d-flex justify-content-center justify-content-sm-start" fixed="bottom" dark expand="md">
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <span className="text-muted animated fadeInUp">&copy; {(new Date()).getFullYear()} &mdash; Made with <FaHeart className="text-danger animated pulse infinite mx-1"/> and React by GNLC</span>
        </IconContext.Provider>

        {/* <Dropdown direction="up" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>
            Theme {this.state.dropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem onClick={() => { this.props.switchTheme("cosmo") }}>Cosmo</DropdownItem>
          <DropdownItem onClick={() => { this.props.switchTheme("lux") }}>Lux</DropdownItem>
          <DropdownItem onClick={() => { this.props.switchTheme("sketchy") }}>Sketchy</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}

      </Navbar>
    )
  }
}

export default Footer
