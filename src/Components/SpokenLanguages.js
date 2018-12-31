import React, { Component } from 'react'
import PropTypes from 'prop-types'
import handleViewport from 'react-in-viewport'

import {
  Row,
  Col,
  Table
} from 'reactstrap'

class _SpokenLanguages extends Component {
  render() {
    return(
      <Row className={`${this.props.data.id} animated ${this.props.inViewport ? "fadeIn" : "fadeOut"}`}>
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12}>

          <Table responsive>
            <thead>
              <tr>
                <th></th>
                <th className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.headRow[0] }}></th>
                <th className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.headRow[1] }}></th>
                <th className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.headRow[2] }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" dangerouslySetInnerHTML={{ __html: this.props.data.headCol[0] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.itRead }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.enRead }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.tenRead }}></td>
              </tr>
              <tr>
                <th scope="row" dangerouslySetInnerHTML={{ __html: this.props.data.headCol[1] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.itWrite }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.enWrite }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.tenWrite }}></td>
              </tr>
              <tr>
                <th scope="row" dangerouslySetInnerHTML={{ __html: this.props.data.headCol[2] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.itVerb }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.enVerb }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.tenVerb }}></td>
              </tr>
            </tbody>
          </Table>

        </Col>
      </Row>

    )
  }
}

_SpokenLanguages.propTypes = {
  data: PropTypes.object.isRequired,
  inViewport: PropTypes.bool,
}

const SpokenLanguages = handleViewport(_SpokenLanguages);

export default SpokenLanguages
