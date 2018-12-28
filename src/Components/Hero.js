import React from 'react'
import {
  Row,
  Col
} from 'reactstrap'

import WordCloud from './WordCloud.js'

const Hero = React.memo(function Hero(props) {
  return(

    <Row>
      <Col xs={12} className="d-flex align-items-center justify-content-center">
        <WordCloud />
      </Col>
    </Row>

  )
})


export default Hero
