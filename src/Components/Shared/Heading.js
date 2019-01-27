import React from "react"
import PropTypes from "prop-types"

const Heading = React.memo(function Heading(props) {
  return props.label ? (
    <h2
      className={`heading m-0 animated ${
        props.inViewport
          ? global.headingAnimation.in
          : global.headingAnimation.out
      }`}
      dangerouslySetInnerHTML={{ __html: props.label }}
    />
  ) : null
})

Heading.propTypes = {
  label: PropTypes.string.isRequired,
  inViewport: PropTypes.bool.isRequired,
}

export default Heading
