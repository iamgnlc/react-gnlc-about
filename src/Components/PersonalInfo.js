import React, { Component } from 'react'
import PropTypes from "prop-types"
import handleViewport from 'react-in-viewport'

import {
  Row,
  Col
} from 'reactstrap'

class _PersonalInfo extends Component {
  render() {
    return(
      <Row className={`${this.props.data.id} animated ${this.props.inViewport ? "fadeIn" : "fadeOut"}`}>
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="title">Date of birth</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.props.data.dob }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="title">Gender</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.props.data.gender }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="title">Driving licence</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.props.data.drivingLicence }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="title">Nationality</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.props.data.nationality }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="title">UK work permit</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.props.data.workPermit }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="title">N.I. No.</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.props.data.nino }}></p></Col>
      </Row>
    )
  }
}

_PersonalInfo.propTypes = {
  data: PropTypes.object,
  inViewport: PropTypes.bool,
}

const PersonalInfo = handleViewport(_PersonalInfo);

export default PersonalInfo
