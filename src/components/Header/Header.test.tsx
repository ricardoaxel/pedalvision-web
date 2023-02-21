import { render, screen } from "@testing-library/react"
import { Header } from ".."
import { Provider } from "react-redux"
import { store } from "../../store"

beforeEach(() =>
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
)
describe("Show header texts", () => {
  it("Should show 'User:' before user", () => {
    expect(screen.getByTestId("userP")).toBeInTheDocument()
  })
  it("Should show the actual user", () => {
    expect(screen.getByTestId("userName")).toBeInTheDocument()
  })
})
