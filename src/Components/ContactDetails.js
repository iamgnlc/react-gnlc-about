import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap'

class ContactDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return(
      <Row className="section-wrapper contact-details animated fadeIn">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.state.data.title }}></h2>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="heading">Home Address</h5></Col>
            <Col xs={12} sm={8}>
              <p>{this.state.data.homeAddress.road}<br/>{this.state.data.homeAddress.postCode}<br/>{this.state.data.homeAddress.town}<br/>{this.state.data.homeAddress.county} {this.state.data.homeAddress.country}</p>
            </Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="heading">Telephone</h5></Col>
            <Col xs={12} sm={8}><p>{this.state.data.phoneNumber.join(", ")}</p></Col>
          </Row>
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="heading">Email</h5></Col>
            <Col xs={12} sm={8}><p>{this.state.data.email.map((url, key) => {
              return <a key={key} href={"mailto:" + url} className="d-block">{url}</a>
            })}</p></Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="heading">Web</h5></Col>
            <Col xs={12} sm={8}><p>{this.state.data.web.map((url, key) => {
              return <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="d-block">{url}</a>
            })}</p></Col>
            <Col xs={12} sm={4} className="text-md-right"><h5 className="heading">Social</h5></Col>
            <Col xs={12} sm={8}><p>{this.state.data.social.map((url, key) => {
              return <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="d-block">{url}</a>
            })}</p></Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default ContactDetails
