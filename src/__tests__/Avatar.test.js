import React from "react"
import renderer from "react-test-renderer"

import Avatar from "../Components/Avatar"

describe("avatar component", () => {
  it("should render without crashing", () => {
    const tree = renderer.create(<Avatar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
