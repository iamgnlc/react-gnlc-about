import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './HiddenContent.css'

import {
  Row,
  Col
} from 'reactstrap'

class HiddenContent extends Component {
  render() {
    return(
      <Row className="hidden-content">
        {this.props.label ?
          <Col xs={12} className="text-center heading-wrapper m-0 py-2">
            <h4 className="heading m-0">{this.props.label}</h4>
          </Col>
        : null}
        <Col xs={12}>
          <div className="hidden-wrapper">
            <div className="hidden-wrapper-body">
              <div className="hidden-avatar"></div>
              <div className="hidden-author"></div>
              <div className="hidden-label"></div>
              <div className="hidden-content-1"></div>
              <div className="hidden-content-2"></div>
              <div className="hidden-content-3"></div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

HiddenContent.propTypes = {
  label: PropTypes.string,
}

export default HiddenContent
