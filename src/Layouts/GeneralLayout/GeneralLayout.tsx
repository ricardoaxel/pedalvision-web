import { Global } from "@emotion/react"
import { Style } from "./GeneralLayout.css"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
export const GeneralLayout = ({ children }: Props) => {
  return (
    <>
      <Global styles={Style} />
      {children}
    </>
  )
}
