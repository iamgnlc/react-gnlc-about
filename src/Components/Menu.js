import React from 'react'
import PropTypes from "prop-types"

import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import "../global.js"

const Menu = React.memo(function Menu(props) {
  return(
    <Nav className="ml-auto animated fadeInRight" navbar>
      {props.menu.map((entry, key) => {
        return(
          <NavItem key={key}>
            <NavLink href={`#`+ entry.ref} onClick={props.callback}>~/{entry.name}</NavLink>
          </NavItem>
        )
      })}
    </Nav>
  )
})

Menu.propTypes = {
  menu: PropTypes.array,
  callback: PropTypes.func,
}

export default Menu
