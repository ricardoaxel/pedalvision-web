import { GeneralLayout } from "./Layouts/GeneralLayout"
import { IPCView, Login } from "./Views"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { Provider } from "react-redux"
import { store } from "./store"

const SessionManager = () => {
  const { isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home")
    } else {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="home" element={<IPCView />} />
    </Routes>
  )
}

export const App = () => {
  return (
    <GeneralLayout>
      <Auth0Provider
        domain="dev-kanjv8ofv8oka350.us.auth0.com"
        clientId="Af5EQPvKl5XSYYU0W9Qmw5EHXhkoEjJu"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <BrowserRouter>
            <SessionManager />
          </BrowserRouter>
        </Provider>
      </Auth0Provider>
    </GeneralLayout>
  )
}
