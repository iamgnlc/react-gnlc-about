import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { parse } from "url"

import App from "./App"
import NoMatch from "./NoMatch"
import { homepage } from "../package.json"

const basename = parse(homepage).pathname

const Routes = React.memo(() => {
  return (
    <Router basename={basename}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/showAll/" render={() => <App contacts={true} />} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
})

export default Routes
