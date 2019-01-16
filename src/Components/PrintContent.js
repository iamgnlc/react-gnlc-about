import React, { Component } from "react"
import PropTypes from "prop-types"

import { Row, Col } from "reactstrap"

class PrintContent extends Component {
  render() {
    return (
      <Row className="print-content d-none d-print-block">
        <Col xs={12} dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </Row>
    )
  }
}

PrintContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default PrintContent
