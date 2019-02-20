import React from "react"
import renderer from "react-test-renderer"

import "../config/global.js"

import Heading from "../Components/Shared/Heading"

describe("heading component", () => {
  it("should render without crashing", () => {
    const tree = renderer
      .create(<Heading label="test heading" inViewport={true} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
