import { useState, useEffect } from "react"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

axios.defaults.baseURL = process.env.api
export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>()
  const [error, setError] = useState<AxiosError>()
  const [loading, setLoading] = useState(
    axiosParams.method === "GET" || axiosParams.method === "get"
  )

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params)
      setResponse(result)
    } catch (error) {
      let message
      // eslint-disable-next-line import/no-named-as-default-member
      if (axios.isAxiosError(error) && error.response) {
        message = error.response.data.message
      } else message = String(error)
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const sendData = () => {
    fetchData(axiosParams)
  }

  useEffect(() => {
    if (axiosParams.method === "GET" || axiosParams.method === "get") {
      fetchData(axiosParams)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { response, error, loading, sendData }
}
