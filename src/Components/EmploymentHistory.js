import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import handleViewport from "react-in-viewport"

import { Row, Col } from "reactstrap"

import Heading from "./Shared/Heading"
import List from "./Shared/List"

class _EmploymentHistory extends PureComponent {
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
          {this.props.data.paragraphs.map((section, key) => {
            return (
              <Row key={key} className="mb-4">
                <Col
                  xs={12}
                  md={3}
                  className="title-wrapper text-center text-md-right"
                >
                  <h5
                    className="title text-center text-md-right"
                    dangerouslySetInnerHTML={{ __html: section.role }}
                  />
                  <h6
                    className="sub-title text-center text-md-right d-inline-block d-md-block mx-2 mx-md-0"
                    dangerouslySetInnerHTML={{ __html: section.period }}
                  />
                  <h6
                    className="sub-title text-center text-md-right d-inline-block d-md-block mx-2 mx-md-0"
                    dangerouslySetInnerHTML={{ __html: section.company }}
                  />
                </Col>
                <Col xs={12} md={9}>
                  <List data={section.list} />
                </Col>
              </Row>
            )
          })}
        </Col>
      </Row>
    )
  }
}

_EmploymentHistory.propTypes = {
  data: PropTypes.object.isRequired,
  inViewport: PropTypes.bool,
}

const EmploymentHistory = handleViewport(_EmploymentHistory)

export default EmploymentHistory
