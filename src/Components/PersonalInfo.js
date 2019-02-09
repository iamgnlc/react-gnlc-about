import React, { Component } from "react"
import PropTypes from "prop-types"
import handleViewport from "react-in-viewport"

import Heading from "./Shared/Heading"

import { Row, Col } from "reactstrap"

class _PersonalInfo extends Component {
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
          <Heading
            label={this.props.data.title}
            inViewport={this.props.inViewport}
          />
        </Col>
        <Col xs={4} sm={3} className="text-md-right">
          <h5 className="title">Date of birth</h5>
        </Col>
        <Col xs={8} sm={4}>
          <p dangerouslySetInnerHTML={{ __html: this.props.data.dob }} />
        </Col>
        <Col xs={4} sm={2} className="text-md-right">
          <h5 className="title">Gender</h5>
        </Col>
        <Col xs={8} sm={3}>
          <p dangerouslySetInnerHTML={{ __html: this.props.data.gender }} />
        </Col>
        <Col xs={4} sm={3} className="text-md-right">
          <h5 className="title">Driving licence</h5>
        </Col>
        <Col xs={8} sm={4}>
          <p
            dangerouslySetInnerHTML={{ __html: this.props.data.drivingLicence }}
          />
        </Col>
        <Col xs={4} sm={2} className="text-md-right">
          <h5 className="title">Nationality</h5>
        </Col>
        <Col xs={8} sm={3}>
          <p
            dangerouslySetInnerHTML={{ __html: this.props.data.nationality }}
          />
        </Col>
        <Col xs={4} sm={3} className="text-md-right">
          <h5 className="title">UK work permit</h5>
        </Col>
        <Col xs={8} sm={4}>
          <p dangerouslySetInnerHTML={{ __html: this.props.data.workPermit }} />
        </Col>
        <Col xs={4} sm={2} className="text-md-right">
          <h5 className="title">N.I. No.</h5>
        </Col>
        <Col xs={8} sm={3}>
          <p dangerouslySetInnerHTML={{ __html: this.props.data.nino }} />
        </Col>
      </Row>
    )
  }
}

_PersonalInfo.propTypes = {
  data: PropTypes.object.isRequired,
  inViewport: PropTypes.bool,
}

const PersonalInfo = handleViewport(_PersonalInfo)

export default PersonalInfo
