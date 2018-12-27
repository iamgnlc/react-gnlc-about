import React, { Component } from 'react'
import jsonData from './data.json'

import "./global.js"

import {
  Container,
} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import './App.css'

// import Hero from './Components/Hero.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import ContactDetails from './Components/ContactDetails.js'
import Description from './Components/Description.js'
import PersonalInfo from './Components/PersonalInfo.js'
import KeyAttributes from './Components/KeyAttributes.js'
import SpokenLanguages from './Components/SpokenLanguages.js'

import { Helmet } from 'react-helmet'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

class App extends Component {
  constructor(props) {
    super(props)

    configureAnchors({offset: -56, scrollDuration: 750})

    this.state = {
      data: jsonData,
      menu: this.buildMenu(jsonData),
    }
  }

  buildMenu = (jsondata) => {
    let menu = []
    Object.keys(jsondata).map(section => {
      menu.push({ ref: jsondata[section].id, name: jsondata[section].id})
      return true
    })
    return menu
  }

  render() {
    return (
    
      <div id="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{global.title}</title>
          <meta name="author" content={global.meta.author} />
          <meta name="description" content={global.meta.description} />
          <meta name="robots" content="noindex" />
        </Helmet>

        <Header menu={this.state.menu} />

        <Container className="my-5 pt-3 animated fadeIn">

          <ScrollableAnchor id={this.state.data.contactDetails.id}>
            <ContactDetails
              data={this.state.data.contactDetails} />
          </ScrollableAnchor>

          <hr/>

          <ScrollableAnchor id={this.state.data.profile.id}>
            <Description
              data={this.state.data.profile} />
          </ScrollableAnchor>

          <hr/>

          <ScrollableAnchor id={this.state.data.keyAttributes.id}>
            <KeyAttributes
              data={this.state.data.keyAttributes} />
          </ScrollableAnchor>

          <hr/>

          <ScrollableAnchor id={this.state.data.spokenLanguages.id}>
            <SpokenLanguages
              data={this.state.data.spokenLanguages} />
          </ScrollableAnchor>

          <hr/>

          <ScrollableAnchor id={this.state.data.personalInfo.id}>
            <PersonalInfo
              data={this.state.data.personalInfo} />
          </ScrollableAnchor>

          <hr/>

          <ScrollableAnchor id={this.state.data.activities.id}>
            <Description
              data={this.state.data.activities} />
          </ScrollableAnchor>

        </Container>

        <Footer />

      </div>

    )
  }
}

export default App
