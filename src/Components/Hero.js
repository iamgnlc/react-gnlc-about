import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap'

class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return(

      <Row className="hero">
        <Col xs={12} className="d-flex align-items-center justify-content-center animated zoomIn">
          <h1>{global.headLine}</h1>
        </Col>
      </Row>

    )
  }
}

export default Hero
