import * as React from "react"
import { observer } from "mobx-react"

import { AppData } from "./AppData"

@observer
export class App extends React.Component {
  private data = new AppData()

  public componentDidMount() {
    this.data.startUpdateTimer()
  }

  public render() {
    const {
      nowUnixTime,
    } = this.data

    return (
      <div>
        <h1>
          Hello React TypeScript <span className="fa fa-heart" />
        </h1>

        <p>
          UnixTime: {nowUnixTime}
        </p>
      </div >
    )
  }
}
