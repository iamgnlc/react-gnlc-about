import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Col
} from 'reactstrap'

const List = React.memo(function List(props) {
  return(
    <ul className="list mb-4">
      {props.data.map((paragraph, key) => {
        return <li key={key} className="item text-justify mb-3" dangerouslySetInnerHTML={{ __html: paragraph }}></li>
      })}
    </ul>
  )
})

class KeyAttributes extends Component {
  render() {
    return(
      <Row>
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        {this.props.data.paragraphs.map((section, key) => {
          return(
            <React.Fragment key={key}>
              <Col xs={12} sm={3}><h5 className="title text-sm-right" dangerouslySetInnerHTML={{ __html: section.title }}></h5></Col>
              <Col xs={12} sm={9}>
                <List data={section.list} />
              </Col>
            </React.Fragment>
          )
        })}
      </Row>
    )
  }
}

List.propTypes = {
  data: PropTypes.array,
}
KeyAttributes.propTypes = {
  data: PropTypes.object,
}

export default KeyAttributes
