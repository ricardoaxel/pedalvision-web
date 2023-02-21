import moment from "moment"
import { useEffect, useState } from "react"
import { useAxios } from "../../hooks"
import { DataPoint, GraphPoint } from "../../interfaces/generalInterfaces"

interface GraphData {
  domain: number[]
  points: GraphPoint[]
}

export const useGetIPCData = (
  setDomainX: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "",
    headers: {
      accept: "*/*",
    },
  })
  const baseGD = {
    domain: [],
    points: [],
  }
  const [totalData, setTotalData] = useState<GraphData>(baseGD)
  const [dataInRange, setDataInRange] = useState<GraphData>(baseGD)

  useEffect(() => {
    if (response !== undefined) {
      const resData: DataPoint[] = response.data
      const prices = resData.map((entry) => entry.price)
      const extraRange = 25
      //The domain of the graph is stablish based on the maxs and mins plus the extraRange
      const cleanData: GraphData = {
        domain: [
          Math.min(...prices) - extraRange,
          Math.max(...prices) + extraRange,
        ],
        points: resData.map((entry) => {
          return {
            x: moment.utc(entry.date).valueOf(),
            y: entry.price,
            z: entry.volume,
            change: entry.change,
            percentageChange: entry.percentageChange,
          }
        }),
      }
      setTotalData(cleanData)
      setDataInRange(cleanData)
      setDomainX([0, cleanData.points.length - 1])
    }
  }, [response, setDomainX])

  return { totalData, dataInRange, loading, error }
}
