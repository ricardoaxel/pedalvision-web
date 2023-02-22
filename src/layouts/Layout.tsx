// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { Global } from "@emotion/react"
import React from "react"
import { Style } from "./Layout.css"
import { MainStyle } from "./MainLayout.css"
const Layout = ({ children, type }: any) => {
  //Depending on the type of page, the layout may change
  let styleSelector
  switch (type) {
    default:
      styleSelector = MainStyle
      break
  }
  return (
    <>
      <main css={styleSelector}>{children}</main>
      <Global styles={Style} />
    </>
  )
}

export { Layout }
