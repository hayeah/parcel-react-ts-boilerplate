import "font-awesome/css/font-awesome.css"
import "normalize.css"

import "./index.css"

import * as React from "react"
import { render } from "react-dom"

const view = (
  <div>
    <h1>
      Hello React TypeScript <span className="fa fa-heart" />
    </h1>

    <h2>
      VERSION: {VERSION}
    </h2>

    <h2>
      RELEASE: {RELEASE}
    </h2>
  </div>
)

window.addEventListener("load", () => {
  render(view, document.getElementById("root"))
})
