import React, { Component } from "react"

import { Media } from "reactstrap"

import avatar from "../Images/avatar.jpg"

class Avatar extends Component {
  render() {
    return <Media object src={avatar} className="avatar rotate mr-2" />
  }
}

export default Avatar
