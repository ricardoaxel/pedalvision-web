import { AreaChart, Area, ResponsiveContainer } from "recharts"
import { ChartRenderProps } from "../../interfaces/generalInterfaces"

export const CustomAreaChart = ({
  CartesianGrid,
  XAxis,
  YAxis,
  points,
  Tooltip,
  margin,
}: ChartRenderProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart margin={margin} data={points}>
        <CartesianGrid />
        {XAxis}
        {YAxis}
        <Area
          type="monotone"
          dataKey="y"
          stackId="1"
          stroke="#09efff"
          fill="#09efff"
        />
        {Tooltip}
      </AreaChart>
    </ResponsiveContainer>
  )
}
