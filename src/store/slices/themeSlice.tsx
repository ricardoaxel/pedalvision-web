// Please note that this gist follows the repo available at: https://github.com/delasign/react-redux-tutorial
import { createSlice } from "@reduxjs/toolkit"
import { darkTheme } from "./darkTheme"
import { lightTheme } from "./lightTheme"

const initialState = darkTheme

export const themeSlice = createSlice({
  name: "themeSliceName",
  initialState,
  reducers: {
    changeTheme: (state) =>
      state.themeName === "lightTheme" ? darkTheme : lightTheme,
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions
// You must export the reducer as follows for it to be able to be read by the store.
export default themeSlice.reducer
