import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap'

class Description extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return(
      <Row className="section-wrapper description animated fadeIn">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.state.data.title }}></h2>
        </Col>
        <Col xs={12}><p className="text-justify" dangerouslySetInnerHTML={{ __html: this.state.data.description }} /></Col>
      </Row>
    )
  }
}

export default Description
