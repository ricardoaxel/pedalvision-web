import React, { useContext, useReducer } from "react"
import { sessionReducer } from "./SessionReducer"
import { themes } from "./Themes"
export const initialState = {
  actualTheme: themes.lightTheme,
}
const SessionContext = React.createContext({
  sessionState: initialState,
  dispatch: {},
})
export function useSession() {
  return useContext(SessionContext)
}

export function SessionProvider({ children }: any) {
  //This state (reducer) is for managing all the properties of the session
  const [sessionState, dispatch] = useReducer(sessionReducer, initialState)
  return (
    <SessionContext.Provider
      value={{ sessionState: sessionState, dispatch: dispatch }}
    >
      {children}
    </SessionContext.Provider>
  )
}
