import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Col,
  Table
} from 'reactstrap'

class SpokenLanguages extends Component {
  render() {
    return(
      <Row className="spoken-languages">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12}>

          <Table responsive={true}>
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
                <th dangerouslySetInnerHTML={{ __html: this.props.data.headCol[0] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.itRead }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.enRead }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.tenRead }}></td>
              </tr>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: this.props.data.headCol[1] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.itWrite }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.enWrite }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.props.data.table.tenWrite }}></td>
              </tr>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: this.props.data.headCol[2] }}></th>
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

SpokenLanguages.propTypes = {
  data: PropTypes.object,
}

export default SpokenLanguages
