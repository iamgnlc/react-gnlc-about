import React, { PureComponent } from "react";
import TagCloud from "react-tag-cloud";

import cloud from "../config/cloud.js";

const cloudStyle = {
  fontFamily: "Inconsolata",
  width: "100%",
  height: "calc(100vh - 100px)"
};

class WordCloud extends PureComponent {
  shuffle = () => {
    this.forceUpdate();
  };

  autoShuffle = () => {
    setInterval(() => {
      this.shuffle();
    }, process.env.REACT_APP_AUTO_SHUFFLE_TIMEOUT);
  };

  componentDidMount() {
    // this.autoShuffle()
  }

  renderWord = (text, style) => {
    return (
      <span key={text} className="tag" style={style}>
        {text}
      </span>
    );
  };

  renderDesktop = () => {
    return (
      <TagCloud
        onClick={this.shuffle}
        className="d-none d-sm-block"
        style={cloudStyle}
      >
        {cloud.map((word, index) => {
          let tagStyle = {
            fontSize: word.value * 6,
            opacity: word.value / 10,
            padding: word.value * 1.5,
            zIndex: -index
          };
          return this.renderWord(word.text, tagStyle);
        })}
      </TagCloud>
    );
  };

  renderMobile = () => {
    return (
      <TagCloud
        onClick={this.shuffle}
        className="d-block d-sm-none"
        style={cloudStyle}
      >
        {cloud.map((word, index) => {
          let tagStyle = {
            fontSize: word.value * 3,
            opacity: word.value / 10,
            padding: word.value * 0.75,
            zIndex: -index
          };
          return this.renderWord(word.text, tagStyle);
        })}
      </TagCloud>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.renderDesktop()}
        {this.renderMobile()}
      </React.Fragment>
    );
  }
}

export default WordCloud;
