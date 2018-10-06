import React, { Component } from 'react'
import jsonData from './data.json'
import './globals.js'

import {Helmet} from 'react-helmet'

import {
  Container,
} from 'reactstrap'

import 'bootswatch/dist/cosmo/bootstrap.min.css'
import 'animate.css/animate.min.css'
import './App.css'

import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import ContactDetails from './Components/ContactDetails.js'
import Description from './Components/Description.js'
import PersonalInfo from './Components/PersonalInfo.js'
import KeyAttributes from './Components/KeyAttributes.js'
import SpokenLanguages from './Components/SpokenLanguages.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: jsonData,
      dropdown: this.buildDropdown(jsonData),
    }
  }

  slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  buildDropdown = (jsondata) => {
    let dropdown = []
    Object.keys(jsondata).map(section => {
      dropdown.push({ ref: this.slugify(jsondata[section].title), name: jsondata[section].title })
      return true
    })
    return dropdown
  }

  render() {
    return (
    
      <div className="mt-6">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Curriculum Vitae of Gianluca Agnocchetti</title>
        </Helmet>

        <Header data={this.state.data.contactDetails} dropdown={this.state.dropdown} />

        <Container className="mb-5">

          <ContactDetails
            ref={(section) => { this.state.dropdown[0].ref = section }}
            data={this.state.data.contactDetails} />

          <hr className="animated zoomIn"/>

          <Description
            ref={(section) => { this.state.dropdown[1].ref = section }}
            data={this.state.data.profile} />

          <hr className="animated zoomIn"/>

          <KeyAttributes
            ref={(section) => { this.state.dropdown[2].ref = section }}
            data={this.state.data.keyAttributes} />

          <hr className="animated zoomIn"/>

          <SpokenLanguages
            ref={(section) => { this.state.dropdown[3].ref = section }}
            data={this.state.data.spokenLanguages} />

          <hr className="animated zoomIn"/>

          <PersonalInfo
            ref={(section) => { this.state.dropdown[4].ref = section }}
            data={this.state.data.personalInfo} />

          <hr className="animated zoomIn"/>

          <Description
            ref={(section) => { this.state.dropdown[5].ref = section }}
            data={this.state.data.activities} />

        </Container>

        <Footer />

      </div>

    )
  }
}

export default App
