import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Row,
  Col
} from 'reactstrap'
import classnames from 'classnames'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data
    }
  }

  render() {
    return(
      <ul className="list">
        {this.state.data.map((paragraph, key) => {
          return <li key={key} className="item text-justify" dangerouslySetInnerHTML={{ __html: paragraph }}></li>
        })}
      </ul>
    )
  }
}

class KeyAttributes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.data,
      activeTab: 0,
    }
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    return(

      <Row className="section-wrapper key-attributes animated fadeIn">
        <Col xs={12} className="text-center heading-wrapper mb-3 py-1">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.state.data.title }}></h2>
        </Col>
        <Col xs={12}>

          <Nav tabs className="mb-3">
            {this.state.data.paragraphs.map((section, key) => {
              return(
                <NavItem key={key}>
                  <NavLink
                    key={key}
                    className={classnames({ "active": this.state.activeTab === key, "text-muted": this.state.activeTab !== key })}
                    onClick={() => { this.toggle(key) }}
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                </NavItem>
              )
            })}
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            {this.state.data.paragraphs.map((section, key) => {
              return(
                <TabPane
                  key={key}
                  tabId={key}
                  className="section animated fadeIn"
                >
                  <Row>
                    <Col xs={12} sm={3} className="text-left"><h5 className="title" dangerouslySetInnerHTML={{ __html: section.title }}></h5></Col>
                    <Col xs={12} sm={9}>
                      <List data={section.list} />
                    </Col>
                  </Row>
                </TabPane>
              )
            })}
          </TabContent>

        </Col>
      </Row>
    )
  }
}

export default KeyAttributes
