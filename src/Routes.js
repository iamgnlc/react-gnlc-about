import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import App from "./App"

const Routes = React.memo(() => {
  return (
    <Router>
      <Switch>
        <Route path="/showAll/">
          <App contacts={true} />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  )
})

export default Routes
