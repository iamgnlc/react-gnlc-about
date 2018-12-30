import React, { Component } from 'react'
import PropTypes from 'prop-types'
import handleViewport from 'react-in-viewport'

import './HiddenContent.css'

import {
  Row,
  Col
} from 'reactstrap'

class _HiddenContent extends Component {
  render() {
    return(
      <Row className={`hidden-content animated ${this.props.inViewport ? "fadeIn" : "fadeOut"}`}>
        {this.props.label ?
          <Col xs={12} className="text-center heading-wrapper m-0 py-2">
            <h2 className="heading m-0">{this.props.label}</h2>
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
          <p className="text-center text-muted">Sorry, these informations are hidden.</p>
        </Col>
      </Row>
    )
  }
}

_HiddenContent.propTypes = {
  label: PropTypes.string,
  inViewport: PropTypes.bool,
}

const HiddenContent = handleViewport(_HiddenContent);

export default HiddenContent
