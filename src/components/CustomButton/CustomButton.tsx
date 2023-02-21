// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { style } from "./CustomButton.css"
import { ReactNode } from "react"

export const CustomButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
  className: string
}) => {
  return (
    <button css={style()} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
