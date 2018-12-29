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

  // componentDidMount() {
  //   setInterval(() => {
  //     this.shuffle();
  //   }, process.env.REACT_APP_AUTO_SHUFFLE_TIMEOUT);
  // }

  renderWord = (text, style) => {
    return (
      <span
        key={text}
        className="tag"
        style={style}
      >{text}</span> 
    )
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
          return this.renderWord(word.text, tagStyle)
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
          return this.renderWord(word.text, tagStyle)
        })}
      </TagCloud>
    )
  }

  render() {
    return (
      <React.Fragment>
        { this.renderDesktop() }
        { this.renderMobile() }
      </React.Fragment>
    )
  }
}

export default WordCloud
