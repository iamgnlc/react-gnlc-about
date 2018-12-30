import React, { Component } from 'react'
import PropTypes from "prop-types"

import "../config/global.js"

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import classNames from 'classnames'
import { goToAnchor } from 'react-scrollable-anchor'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anchor: false,
    }
  }

  setAnchor = (anchor) => {
    this.setState({
      anchor: anchor
    })
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => { 
      this.setAnchor(window.location.hash)
    })
  }

  render() {
    return(
      <Nav className="ml-auto animated fadeInRight nav-menu" navbar>
        {this.props.menu.map((entry, key) => {
          let anchor = "#" + entry.ref
          return(
            <NavItem key={key}>
              <NavLink
                className={classNames({"active": anchor === this.state.anchor})}
                onClick={() => {
                  // Go to element.
                  goToAnchor(anchor, true)
                  // Set active anchor.
                  this.setAnchor(anchor)
                  // Execute callback.
                  this.props.callback()
                }}
              >~/{entry.name}</NavLink>
            </NavItem>
          )
        })}
      </Nav>
    )
  }
}

Menu.propTypes = {
  menu: PropTypes.array,
  callback: PropTypes.func,
}

export default Menu
