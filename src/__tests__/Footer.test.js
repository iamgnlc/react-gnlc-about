import React from "react"
import renderer from "react-test-renderer"

import "../config/global.js"

import Footer from "../Components/Footer"

describe("footer component", () => {
  it("should render without crashing", () => {
    const menu = [
      { ref: "testOne", name: "Menu One" },
      { ref: "testTwo", name: "Menu Two" },
      { ref: "testThree", name: "Menu Three" },
    ]
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
