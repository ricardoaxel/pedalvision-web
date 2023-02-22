import React from "react"
import "react-tooltip/dist/react-tooltip.css"
import { Layout } from "./layouts"
import { PedalboardView } from "./views/PedalboardView/PedalboardView"
import { SessionProvider } from "./context/sessionContext"

export const App = () => {
  return (
    <SessionProvider>
      <Layout>
        <PedalboardView />
      </Layout>
    </SessionProvider>
  )
}
