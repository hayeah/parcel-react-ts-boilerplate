import "font-awesome/css/font-awesome.css"
import "normalize.css"

import "./index.css"

import * as React from "react"
import { render } from "react-dom"

import { App } from "./views/App"

function renderApp() {
  render(<App />, document.getElementById("root"))
}

window.addEventListener("load", () => {
  renderApp()
})

if (module.hot) {
  module.hot.accept(renderApp)
}
