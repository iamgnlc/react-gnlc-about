import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import handleViewport from "react-in-viewport";

import { Row, Col } from "reactstrap";

import Heading from "./Shared/Heading";

class _Education extends PureComponent {
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
              <Row key={key}>
                <Col xs={12} sm={3} className="title-wrapper">
                  <h5
                    className="title text-center text-sm-right"
                    dangerouslySetInnerHTML={{ __html: section.date }}
                  />
                </Col>
                <Col xs={12} sm={9}>
                  <p>{section.text}</p>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    );
  }
}

_Education.propTypes = {
  data: PropTypes.object.isRequired,
  inViewport: PropTypes.bool
};

const Education = handleViewport(_Education);

export default Education;
