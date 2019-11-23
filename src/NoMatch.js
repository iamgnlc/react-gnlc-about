import React from "react"
import { Helmet } from "react-helmet"

const NoMatch = React.memo(() => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
        <h1 className="animated fadeInDown">404 Not Found</h1>
        <p className="animated fadeInUp">
          The page you were looking for does not exist.
        </p>
      </div>
    </>
  )
})

export default NoMatch
