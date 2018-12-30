import React, { Component } from 'react'
import PropTypes from 'prop-types'
import handleViewport from 'react-in-viewport'

import {
  Row,
  Col
} from 'reactstrap'

class _Description extends Component {
  render() {
    return(
      <Row className={`${this.props.data.id} animated ${this.props.inViewport ? "fadeIn" : "fadeOut"}`}>
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12}><p className="text-justify" dangerouslySetInnerHTML={{ __html: this.props.data.description }} /></Col>
      </Row>
    )
  }
}

_Description.propTypes = {
  data: PropTypes.object,
  inViewport: PropTypes.bool,
}

const Description = handleViewport(_Description);

export default Description
