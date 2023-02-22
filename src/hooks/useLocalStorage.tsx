import { useState } from "react"

const useLocalStorage = (key: any, defaultTo: any) => {
  return useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key)!)
      : defaultTo
  )
}

export { useLocalStorage }
