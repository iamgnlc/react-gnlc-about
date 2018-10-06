import React, { Component } from 'react'
import {
  Row,
  Col,
  Table
} from 'reactstrap'

class SpokenLanguages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return(
      <Row className="section-wrapper spoken-languages animated fadeIn">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.state.data.title }}></h2>
        </Col>
        <Col xs={12}>

          <Table responsive={true}>
            <thead>
              <tr>
                <th></th>
                <th className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.headRow[0] }}></th>
                <th className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.headRow[1] }}></th>
                <th className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.headRow[2] }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: this.state.data.headCol[0] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.itRead }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.enRead }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.tenRead }}></td>
              </tr>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: this.state.data.headCol[1] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.itWrite }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.enWrite }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.tenWrite }}></td>
              </tr>
              <tr>
                <th dangerouslySetInnerHTML={{ __html: this.state.data.headCol[2] }}></th>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.itVerb }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.enVerb }}></td>
                <td className="text-center" dangerouslySetInnerHTML={{ __html: this.state.data.table.tenVerb }}></td>
              </tr>
            </tbody>
          </Table>

        </Col>
      </Row>
    )
  }
}

export default SpokenLanguages
