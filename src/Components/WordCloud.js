import React, { Component } from 'react'
 
import TagCloud from 'react-tag-cloud'

import "./cloud.js"
import cloud from './cloud.js'
 
class WordCloud extends Component {
  render() {
    let cloudStyle = {
      fontFamily: 'Inconsolata',
      width: '100%',
      height: 'calc(100vh - 100px)',
    }
    return (
      <React.Fragment>

        {/* Desktop */}
        <TagCloud 
          className="d-none d-sm-block"
          style={cloudStyle}>
          { cloud.map((word) => {
            let tagStyle = {
              fontSize: word.value * 6,
              opacity: word.value / 10,
              padding: word.value * 1.25,
            }
            return (<span
              key={word}
              className="tag"
              style={tagStyle}
            >{word.text}</span>)
          })}
        </TagCloud>

        {/* Mobile */}
        <TagCloud 
          className="d-block d-sm-none"
          style={cloudStyle}>
          { cloud.map((word) => {
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

      </React.Fragment>
    )
  }
}

export default WordCloud
