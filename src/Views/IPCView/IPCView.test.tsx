import React from "react"
import { render, screen } from "@testing-library/react"
import { IPCView } from ".."
import { Provider } from "react-redux"
import { store } from "../../store"

describe("Show Area Graph", () => {
  beforeEach(() =>
    render(
      <Provider store={store}>
        <IPCView initialGraphType={"Bubble"} />
      </Provider>
    )
  )
  it("Should display Bubble text with initialGraphType=Bubble", async () => {
    const data = await expect(screen.getByText(/Bubble/i))
    data.toBeInTheDocument()
  })
  it("Should show the title name", async () => {
    const data = await expect(
      screen.queryByText(/IPC: Índice de Precios y Cotizaciones/i)
    )
    data.toBeInTheDocument()
  })
})

describe("Show Area Graph", () => {
  it("Should display Area text with initialGraphType=Area", async () => {
    await render(
      <Provider store={store}>
        <IPCView initialGraphType={"Area"} />
      </Provider>
    )
    const data = await expect(screen.getByText(/Area/i))
    data.toBeInTheDocument()
  })
})
