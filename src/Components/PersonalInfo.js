import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap'

class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return(
      <Row className="section-wrapper personal-info animated fadeIn">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.state.data.title }}></h2>
        </Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="heading">Date of birth</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.state.data.dob }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="heading">Gender</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.state.data.gender }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="heading">Driving licence</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.state.data.drivingLicence }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="heading">Nationality</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.state.data.nationality }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="heading">UK work permit</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.state.data.workPermit }}></p></Col>
        <Col xs={4} sm={2} className="text-md-right"><h5 className="heading">N.I. No.</h5></Col>
        <Col xs={8} sm={4}><p dangerouslySetInnerHTML={{ __html: this.state.data.nino }}></p></Col>
      </Row>
    )
  }
}

export default PersonalInfo
