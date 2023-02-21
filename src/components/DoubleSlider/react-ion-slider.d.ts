declare module "react-ion-slider" {
  import React from "react"

  export interface MyComponentProps {
    extra_classes: string
    type: string
    values: string[]
    onFinish: (value: SliderPoint) => void
    from: number
    to: number
    drag_interval: boolean
  }

  declare const MyComponent: React.SFC<MyComponentProps>

  export default MyComponent
}
