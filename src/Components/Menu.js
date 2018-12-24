import React, { Component } from 'react'
import PropTypes from "prop-types"

import { goToAnchor } from 'react-scrollable-anchor'

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import classNames from 'classnames'

import "../global.js"

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
      <Nav className="ml-auto animated fadeInRight" navbar>
        {this.props.menu.map((entry, key) => {
          return(
            <NavItem key={key}>
              <NavLink
                className={classNames({"active": "#" + entry.ref === this.state.anchor})}
                onClick={() => {
                  goToAnchor("#" + entry.ref, true)
                  this.setAnchor("#" + entry.ref)
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
