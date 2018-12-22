import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Col
} from 'reactstrap'

class Description extends Component {
  render() {
    return(
      <Row className="description">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12}><p className="text-justify" dangerouslySetInnerHTML={{ __html: this.props.data.description }} /></Col>
      </Row>
    )
  }
}

Description.propTypes = {
  data: PropTypes.object,
}

export default Description
