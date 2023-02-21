// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import moment from "moment"
import { Tooltip } from "recharts"
import { style } from "./CustomToolTip.css"

const CustomTooltip = (props: any) => {
  const { active, payload } = props

  if (active) {
    const currData = payload && payload.length ? payload[0].payload : null

    const tags = [
      {
        name: "Date",
        value: currData
          ? moment(currData.x).local().format("YYYY-MM-DD HH:mm:ss")
          : " -- ",
      },
      {
        name: "Price",
        value: currData ? currData.y : " -- ",
      },
      {
        name: "Volume",
        value: currData ? currData.z : " -- ",
      },
      {
        name: "Change",
        value: currData ? currData.change : " -- ",
      },
      {
        name: "Percentage change",
        value: currData ? currData.percentageChange : " -- ",
      },
    ]

    return (
      <div className="area-chart-tooltip" css={style()}>
        <h4>Specific data</h4>
        <ul>
          {tags.map((tag, key) => (
            <li key={key}>
              <p className="tagName">{tag.name}</p>
              <p>{tag.value}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}

export const CustomTooltipContainer = (
  <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
)
