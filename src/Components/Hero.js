import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import handleViewport from "react-in-viewport";

import { Row, Col } from "reactstrap";

import WordCloud from "./WordCloud.js";

class _Hero extends PureComponent {
  render() {
    return (
      <Row
        className={`animated d-print-none ${
          this.props.inViewport
            ? global.sectionAnimation.in
            : global.sectionAnimation.out
        }`}
      >
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <WordCloud />
        </Col>
      </Row>
    );
  }
}

_Hero.propTypes = {
  inViewport: PropTypes.bool
};

const Hero = handleViewport(_Hero);

export default Hero;
