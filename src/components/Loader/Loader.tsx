// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { style } from "./Loader.css"

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={className} css={style()}>
      <div className={`lds-roller`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
