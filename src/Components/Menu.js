import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { goToAnchor } from "react-scrollable-anchor";

import { Nav, NavItem, NavLink } from "reactstrap";

import "../config/global.js";

class Menu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      anchor: false
    };
  }

  setAnchor = anchor => {
    this.setState({
      anchor: anchor
    });
  };

  getInitials = str => {
    let matches = str.match(/\b(\w)/g);
    return matches.join("");
  };

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setAnchor(window.location.hash);
    });
  }

  render() {
    return (
      <Nav className="ml-auto animated fadeInRight nav-menu" navbar>
        {this.props.menu.map((entry, key) => {
          let anchor = "#" + entry.ref;
          return (
            <NavItem key={key}>
              <NavLink
                className={classNames({ active: anchor === this.state.anchor })}
                onClick={() => {
                  // Go to element.
                  goToAnchor(anchor, true);
                  // Set active anchor.
                  this.setAnchor(anchor);
                  // Execute callback.
                  this.props.callback();
                }}
              >
                {anchor === this.state.anchor ? (
                  <span>~/{entry.name}</span>
                ) : (
                  <React.Fragment>
                    <span className="long">~/{entry.name}</span>
                    <span className="short">
                      ~/{this.getInitials(entry.name)}&#8230;
                    </span>
                  </React.Fragment>
                )}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.array,
  callback: PropTypes.func
};

export default Menu;
