import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import * as Sentry from "@sentry/browser"
import { hotjar } from "react-hotjar"

if (process.env.REACT_APP_SENTRY_KEY && process.env.REACT_APP_SENTRY_PID)
  Sentry.init({
    dsn: `https://${process.env.REACT_APP_SENTRY_KEY}@sentry.io/${process.env.REACT_APP_SENTRY_PID}`,
  })

if (process.env.REACT_APP_HOTJAR_ID && process.env.REACT_APP_HOTJAR_SV)
  hotjar.initialize(
    process.env.REACT_APP_HOTJAR_ID,
    process.env.REACT_APP_HOTJAR_SV,
  )

// ReactDOM.render(<App />, document.getElementById("root"))
const rootElement = document.getElementById("root")

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement)
  registerServiceWorker()
} else {
  ReactDOM.render(<App />, rootElement)
}
