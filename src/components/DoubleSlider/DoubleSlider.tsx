// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import IonRangeSlider from "react-ion-slider"
import { Style } from "./DoubleSlider.css"

interface SliderPoint {
  from: number
  to: number
}
interface Props {
  className?: string
  values: string[]
  from: number
  to: number
  bgColor?: string
  hoverColor?: string
  textColor?: string
  onFinish: (value: SliderPoint) => void
}

export const DoubleSlider = ({
  className,
  values,
  onFinish,
  from,
  to,
  bgColor,
  hoverColor,
}: Props) => {
  return (
    <div css={Style(bgColor, hoverColor)} className={className}>
      <IonRangeSlider
        extra_classes={"doubleSliderClass "}
        type="double"
        values={values}
        onFinish={onFinish}
        from={from}
        to={to}
        drag_interval
      />
    </div>
  )
}
