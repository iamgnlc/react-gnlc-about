import React, { Component } from 'react'
 
import TagCloud from 'react-tag-cloud'

import cloud from '../config/cloud.js'
 
const cloudStyle = {
  fontFamily: 'Inconsolata',
  width: '100%',
  height: 'calc(100vh - 100px)',
}

class WordCloud extends Component {

  shuffle = () => {
    this.forceUpdate();
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.shuffle();
    // }, 2500);
  }

  renderDesktop = () => {
    return (
      <TagCloud
        onClick={this.shuffle}
        className="d-none d-sm-block"
        style={cloudStyle}>
        {cloud.map((word) => {
          let tagStyle = {
            fontSize: word.value * 6,
            opacity: word.value / 10,
            padding: word.value * 1.5,
          }
          return (<span
            key={word}
            className="tag"
            style={tagStyle}
          >{word.text}</span>)
        })}
      </TagCloud>
    )
  }
  
  renderMobile = () => {
    return(
      <TagCloud 
        onClick={this.shuffle}
        className="d-block d-sm-none"
        style={cloudStyle}>
        {cloud.map((word) => {
          let tagStyle = {
            fontSize: word.value * 3,
            opacity: word.value / 10,
            padding: word.value * .75,
          }
          return (<span
            key={word}
            className="tag"
            style={tagStyle}
          >{word.text}</span>)
        })}
      </TagCloud>
    )
  }

  render() {
    return (
      <React.Fragment>

        {/* Desktop */}
        { this.renderDesktop() }

        {/* Mobile */}
        { this.renderMobile() }

      </React.Fragment>
    )
  }
}

export default WordCloud
