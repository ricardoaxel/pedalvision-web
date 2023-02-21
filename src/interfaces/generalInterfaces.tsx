import { ReactNode } from "react"

export interface DataPoint {
  date: string
  price: number
  percentageChange: number
  volume: number
  change: number
}
export interface GraphPoint {
  x: number
  y: number
  z: number
  change: number
  percentageChange: number
}
export interface GraphData {
  domain: number[]
  points: GraphPoint[]
}
interface ChartMargin {
  top: number
  right: number
  left: number
  bottom: number
}

export interface ChartRenderProps {
  points: GraphPoint[]
  CartesianGrid: any
  XAxis: ReactNode
  YAxis: ReactNode
  Tooltip: ReactNode
  margin: ChartMargin
}
