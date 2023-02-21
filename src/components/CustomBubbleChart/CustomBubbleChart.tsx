import { ResponsiveContainer, ScatterChart, ZAxis, Scatter } from "recharts"
import { ChartRenderProps } from "../../interfaces/generalInterfaces"

export const CustomBubbleChart = ({
  CartesianGrid,
  XAxis,
  YAxis,
  points,
  Tooltip,
  margin,
}: ChartRenderProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart width={400} height={400} margin={margin}>
        <CartesianGrid />
        {XAxis}
        {YAxis}
        <ZAxis dataKey="z" range={[5, 200]} />

        {Tooltip}
        <Scatter name="A school" data={points} fill="#15d4e2" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
