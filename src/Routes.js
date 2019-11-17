import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import App from "./App"

const Routes = React.memo(() => {
  return (
    <Router>
      <Switch>
        <Route path="/showAll" render={() => <App contacts={true} />} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
})

export default Routes
