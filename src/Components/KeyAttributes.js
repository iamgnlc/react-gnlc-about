import React, { Component } from 'react'
import PropTypes from 'prop-types'
import handleViewport from 'react-in-viewport'

import {
  Row,
  Col
} from 'reactstrap'

const List = React.memo(function List(props) {
  return(
    <ul className="list pl-0 pl-sm-4 mb-4">
      {props.data.map((paragraph, key) => {
        return <li key={key} className="item text-justify mb-3" dangerouslySetInnerHTML={{ __html: paragraph }}></li>
      })}
    </ul>
  )
})

class _KeyAttributes extends Component {
  render() {
    return(
      <Row className={`${this.props.data.id} animated ${this.props.inViewport ? "fadeIn" : "fadeOut"}`}>
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12}>
          {this.props.data.paragraphs.map((section, key) => {
            return(
              <Row key={key}>
                <Col xs={12} sm={3} className="title-wrapper"><h5 className="title text-center text-sm-right" dangerouslySetInnerHTML={{ __html: section.title }}></h5></Col>
                <Col xs={12} sm={9}>
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

List.propTypes = {
  data: PropTypes.array,
}
_KeyAttributes.propTypes = {
  data: PropTypes.object,
  inViewport: PropTypes.bool,
}

const KeyAttributes = handleViewport(_KeyAttributes);

export default KeyAttributes
