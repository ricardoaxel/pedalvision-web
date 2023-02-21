import moment from "moment"
import { XAxis, YAxis } from "recharts"
import { useWindowSize } from "../../hooks"
import { GraphPoint } from "../../interfaces/generalInterfaces"
import { dimensions } from "../../utils"

const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props
  const { width } = useWindowSize()
  return (
    <g transform={`translate(${x - 20},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        dx={20}
        textAnchor="end"
        fill="#666"
        transform="rotate(-90)"
        style={{
          fontSize: width < dimensions.phone ? "0.7rem" : "0.8rem",
        }}
      >
        {payload.value}
      </text>
    </g>
  )
}

export const CustomXAxis = (points: GraphPoint[], domainX: number[]) => {
  const { width } = useWindowSize()

  return (
    <XAxis
      dataKey="x"
      type="number"
      domain={[points[domainX[0]].x, points[domainX[1]].x]}
      allowDataOverflow={true}
      tick={{ fill: "#d1d5de" }}
      dy={15}
      tickFormatter={(date) =>
        moment(date).local().format("YYYY-MM-DD HH:mm:ss")
      }
      interval={1}
      tickCount={
        width < dimensions.smallpc ? (width < dimensions.tablet ? 4 : 6) : 8
      }
      style={{
        fontSize: width < dimensions.phone ? "0rem" : "0.8rem",
      }}
    />
  )
}

export const CustomYAxis = (domain: number[]) => {
  const { width } = useWindowSize()
  return (
    <YAxis
      type="number"
      dataKey="y"
      name="weight"
      unit=""
      domain={domain}
      allowDataOverflow={true}
      style={{
        fontSize: width < dimensions.phone ? "0.7rem" : "0.8rem",
      }}
      interval={1}
      tickCount={
        width < dimensions.smallpc ? (width < dimensions.tablet ? 4 : 6) : 8
      }
      {...(width < dimensions.phone ? { tick: <CustomizedAxisTick /> } : {})}
    />
  )
}
