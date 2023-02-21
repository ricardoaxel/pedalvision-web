// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { style } from "./CustomInput.css"

export const CustomInput = ({
  className,
  value,
  onChange,
}: {
  className: string
  value: string
  onChange: () => void
}) => {
  return (
    <input
      className={className}
      type="text"
      css={style()}
      value={value}
      onChange={onChange}
    />
  )
}
