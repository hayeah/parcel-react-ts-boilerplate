import { observable, computed } from "mobx"

export class AppData {
  @observable public now = new Date()

  @computed
  public get nowUnixTime() {
    return Math.floor(this.now.getTime() / 1000)
  }

  public startUpdateTimer() {
    setInterval(() => {
      this.now = new Date()
    }, 1000)
  }
}
