import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import handleViewport from "react-in-viewport";

import { Row, Col, Table } from "reactstrap";

import Heading from "./Shared/Heading";

class _SpokenLanguages extends PureComponent {
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
        <Col xs={12}>
          <Table responsive>
            <thead>
              <tr>
                <th />
                <th
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.headRow[0]
                  }}
                />
                <th
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.headRow[1]
                  }}
                />
                <th
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.headRow[2]
                  }}
                />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.headCol[0]
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.itRead
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.enRead
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.tenRead
                  }}
                />
              </tr>
              <tr>
                <th
                  scope="row"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.headCol[1]
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.itWrite
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.enWrite
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.tenWrite
                  }}
                />
              </tr>
              <tr>
                <th
                  scope="row"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.headCol[2]
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.itVerb
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.enVerb
                  }}
                />
                <td
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.table.tenVerb
                  }}
                />
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

_SpokenLanguages.propTypes = {
  data: PropTypes.object.isRequired,
  inViewport: PropTypes.bool
};

const SpokenLanguages = handleViewport(_SpokenLanguages);

export default SpokenLanguages;
