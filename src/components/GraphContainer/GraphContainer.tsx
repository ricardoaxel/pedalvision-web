import { CartesianGrid } from "recharts"
import { GraphData } from "../../interfaces/generalInterfaces"
import { CustomAreaChart, CustomBubbleChart, CustomTooltipContainer } from "../"
import { CustomXAxis, CustomYAxis } from "./CustomAxes"
import { dimensions } from "../../utils"
import { useWindowSize } from "../../hooks"

interface Props {
  data: GraphData
  domainX: number[]
  graphType: string
}

export const GraphContainer = ({ data, domainX, graphType }: Props) => {
  const { points, domain } = data

  const { width } = useWindowSize()
  const margin =
    width < dimensions.phone
      ? { top: 20, right: 0, left: -40, bottom: 0 }
      : { top: 20, right: 79, left: 20, bottom: 10 }
  switch (graphType) {
    case "Bubble":
      return (
        <CustomBubbleChart
          CartesianGrid={CartesianGrid}
          XAxis={CustomXAxis(points, domainX)}
          YAxis={CustomYAxis(domain)}
          Tooltip={CustomTooltipContainer}
          points={points}
          margin={margin}
        />
      )
    case "Area":
      return (
        <CustomAreaChart
          CartesianGrid={CartesianGrid}
          XAxis={CustomXAxis(points, domainX)}
          YAxis={CustomYAxis(domain)}
          Tooltip={CustomTooltipContainer}
          points={points}
          margin={margin}
        />
      )
    default:
      return (
        <CustomAreaChart
          CartesianGrid={CartesianGrid}
          XAxis={CustomXAxis(points, domainX)}
          YAxis={CustomYAxis(domain)}
          Tooltip={CustomTooltipContainer}
          points={points}
          margin={margin}
        />
      )
  }
}
