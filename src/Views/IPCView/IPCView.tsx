// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { DoubleSlider, GraphContainer, Header, Loader } from "../../components"
import { style } from "./IPCView.css"
import moment from "moment"
import { TbChartBubble, TbChartLine } from "react-icons/tb"
import { useGetIPCData } from "./useGetIPCData"
import { useAuth0 } from "@auth0/auth0-react"

interface Props {
  className?: string
  initialGraphType?: "Area" | "Bubble"
}
export const IPCView = ({ className, initialGraphType = "Area" }: Props) => {
  const [graphType, setGraphType] = useState(initialGraphType)
  const [domainX, setDomainX] = useState([0, 0])
  const { totalData, dataInRange, loading, error } = useGetIPCData(setDomainX)

  const renderCondition =
    totalData.points.length > 0 && dataInRange.points.length > 0
  const { user } = useAuth0()

  return (
    <>
      <div css={style()} className={className}>
        <Header />

        <div id="centerContainer">
          <h1 data-testid={"titleName"}>
            IPC: Índice de Precios y Cotizaciones
          </h1>

          <div id="graphContainer">
            <div id="headgraphContainer">
              <h2>Graph description: {graphType} Graph</h2>
              {user?.email_verified && (
                <button
                  onClick={() =>
                    setGraphType(graphType === "Area" ? "Bubble" : "Area")
                  }
                >
                  {graphType === "Area" ? (
                    <div data-testid={"bubbleIcon"}>
                      <TbChartBubble className="icon" />
                    </div>
                  ) : (
                    <div data-testid={"areaIcon"}>
                      <TbChartLine className="icon" />
                    </div>
                  )}
                </button>
              )}
            </div>
            {renderCondition && (
              <div id="graphArea">
                <GraphContainer
                  data={dataInRange}
                  domainX={domainX}
                  graphType={graphType}
                />
              </div>
            )}
          </div>
          {renderCondition && (
            <DoubleSlider
              values={totalData.points.map((entry) =>
                moment(entry.x).local().format("YYYY-MM-DD HH:mm:ss")
              )}
              from={domainX[0]}
              to={domainX[1]}
              onFinish={(points) => setDomainX([points.from, points.to])}
              bgColor={"#15d4e2"}
              hoverColor={"rgb(150, 241, 247)"}
              className={"slider"}
            />
          )}
        </div>
        {loading && <Loader className="loader" />}
        {error && <h1>{error}</h1>}
      </div>
    </>
  )
}
