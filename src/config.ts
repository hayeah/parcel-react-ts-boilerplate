export interface IConfig {
  RELEASE: string
}

function config(): IConfig {
  if (process.env.NODE_ENV === "production") {
    return {
      RELEASE: "production",
    }
  }

  return {
    RELEASE: "development",
  }
}

export default config()
