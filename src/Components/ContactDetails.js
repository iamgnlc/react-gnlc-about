import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Col
} from 'reactstrap'

class ContactDetails extends Component {
  render() {
    return(
      <Row className="contact-details">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="title">Full Name</h5></Col>
            <Col xs={12} sm={8}><p>{this.props.data.fullName}</p></Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="title">Home Address</h5></Col>
            <Col xs={12} sm={8}>
              <p>{this.props.data.homeAddress.road}<br/>{this.props.data.homeAddress.postCode}<br/>{this.props.data.homeAddress.town}<br/>{this.props.data.homeAddress.county} {this.props.data.homeAddress.country}</p>
            </Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="title">Telephone</h5></Col>
            <Col xs={12} sm={8}><p>{this.props.data.phoneNumber.map((phoneNumber, key) => {
              return <a key={key} href={"tel:" + phoneNumber} className="d-block">{phoneNumber}</a>
            })}</p></Col>
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="title">Email</h5></Col>
            <Col xs={12} sm={8}><p>{this.props.data.email.map((email, key) => {
              return <a key={key} href={"mailto:" + email} className="d-block">{email}</a>
            })}</p></Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="title">Web</h5></Col>
            <Col xs={12} sm={8}><p>{this.props.data.web.map((url, key) => {
              return <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="d-block">{url}</a>
            })}</p></Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="title">Social</h5></Col>
            <Col xs={12} sm={8}><p>{this.props.data.social.map((url, key) => {
              return <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="d-block">{url}</a>
            })}</p></Col>
          </Row>
        </Col>
      </Row>

    )
  }
}

ContactDetails.propTypes = {
  data: PropTypes.object,
}

export default ContactDetails
