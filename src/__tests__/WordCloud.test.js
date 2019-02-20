import React from "react"
import renderer from "react-test-renderer"

import "../config/cloud.js"

import WordCloud from "../Components/WordCloud"

describe("wordcloud component", () => {
  it("should render without crashing", () => {
    const tree = renderer.create(<WordCloud />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
