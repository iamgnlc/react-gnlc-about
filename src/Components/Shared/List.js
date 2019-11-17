import React from "react"
import PropTypes from "prop-types"

const List = React.memo((props) => {
  return (
    <ul className="list pl-0 pl-sm-4 mb-4">
      {props.data.map((paragraph, key) => {
        return (
          <li
            key={key}
            className="item text-justify mb-3"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        )
      })}
    </ul>
  )
})

List.propTypes = {
  data: PropTypes.array,
}

export default List
