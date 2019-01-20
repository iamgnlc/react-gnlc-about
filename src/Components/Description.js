import React, { Component } from "react"
import PropTypes from "prop-types"
import handleViewport from "react-in-viewport"

import { Row, Col } from "reactstrap"

class _Description extends Component {
  render() {
    return (
      <Row
        className={`${this.props.data.id} animated ${
          this.props.inViewport
            ? global.sectionAnimation.in
            : global.sectionAnimation.out
        }`}
      >
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2
            className={`heading m-0 animated ${
              this.props.inViewport
                ? global.headingAnimation.in
                : global.headingAnimation.out
            }`}
            dangerouslySetInnerHTML={{ __html: this.props.data.title }}
          />
        </Col>
        <Col xs={12}>
          <p
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: this.props.data.description }}
          />
        </Col>
      </Row>
    )
  }
}

_Description.propTypes = {
  data: PropTypes.object.isRequired,
  inViewport: PropTypes.bool,
}

const Description = handleViewport(_Description)

export default Description
