import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor"

import { Container } from "reactstrap"

import jsonData from "./config/data.json"
import "./config/global"

import "bootstrap/dist/css/bootstrap.min.css"
import "animate.css/animate.min.css"
import "./App.scss"

import PrintContent from "./Components/PrintContent"
import Hero from "./Components/Hero"
import HiddenContent from "./Components/HiddenContent"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ContactDetails from "./Components/ContactDetails"
import Description from "./Components/Description"
import PersonalInfo from "./Components/PersonalInfo"
import KeyAttributes from "./Components/KeyAttributes"
import SpokenLanguages from "./Components/SpokenLanguages"
import Education from "./Components/Education"
import EmploymentHistory from "./Components/EmploymentHistory"

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: jsonData,
      menu: null,
      contacts: false,
    }
  }

  buildMenu = (jsondata) => {
    let menu = []
    Object.keys(jsondata).map((section) => {
      menu.push({ ref: jsondata[section].id, name: jsondata[section].id })
      return true
    })
    return menu
  }

  componentDidMount() {
    // Disable console.log in production.
    if (process.env.NODE_ENV === "production") console.log = function() {}
    // Show environment.
    console.log(process.env.NODE_ENV)
    // Configure scroll to anchor.

    this.setState({
      contacts: this.props.contacts,
      menu: this.buildMenu(jsonData),
    })

    configureAnchors({
      offset: -process.env.REACT_APP_ANCHOR_OFFSET,
      scrollDuration: process.env.REACT_APP_ANCHOR_SCROLL_DURATION,
    })
  }

  render() {
    return (
      <div id="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{global.title}</title>
          <meta name="author" content={global.meta.author} />
          <meta name="description" content={global.meta.description} />
        </Helmet>

        <Header menu={this.state.menu} />

        <ParallaxProvider>
          <Container fluid className="mt-5 p-0 pb-4 pt-3 hero">
            <Parallax
              offsetYMax={process.env.REACT_APP_PARALLAX_OFFSET}
              offsetYMin={-process.env.REACT_APP_PARALLAX_OFFSET}
              slowerScrollRate
            >
              <Hero />
            </Parallax>
          </Container>
        </ParallaxProvider>

        <main className="main">
          <Container className="pb-5 pt-4">
            <PrintContent content={global.printHeader} />

            <ScrollableAnchor id={this.state.data.contactDetails.id}>
              {this.props.contacts ? (
                <ContactDetails data={this.state.data.contactDetails} />
              ) : (
                <HiddenContent label={this.state.data.contactDetails.title} />
              )}
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.profile.id}>
              <Description data={this.state.data.profile} />
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.employment.id}>
              <EmploymentHistory data={this.state.data.employment} />
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.keyAttributes.id}>
              <KeyAttributes data={this.state.data.keyAttributes} />
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.education.id}>
              <Education data={this.state.data.education} />
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.spokenLanguages.id}>
              <SpokenLanguages data={this.state.data.spokenLanguages} />
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.personalInfo.id}>
              <PersonalInfo data={this.state.data.personalInfo} />
            </ScrollableAnchor>

            <hr />

            <ScrollableAnchor id={this.state.data.activities.id}>
              <Description data={this.state.data.activities} />
            </ScrollableAnchor>
          </Container>
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
