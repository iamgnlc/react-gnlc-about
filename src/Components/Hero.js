import React, { Component } from 'react'
import PropTypes from "prop-types"
import handleViewport from 'react-in-viewport'

import {
  Row,
  Col
} from 'reactstrap'

import WordCloud from './WordCloud.js'

class _Hero extends Component {
  render() {
    return(
      <Row className={`animated ${this.props.inViewport ? "fadeIn" : "fadeOut"}`}>
        <Col xs={12} className="d-flex align-items-center justify-content-center">
          <WordCloud />
        </Col>
      </Row>
    )
  }
}

_Hero.propTypes = {
  inViewport: PropTypes.bool,
}

const Hero = handleViewport(_Hero);

export default Hero
