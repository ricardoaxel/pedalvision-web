import { movePBElement } from "./movePBElement"
export const escFunction = (
  event: any,
  actualElement: any,
  setPedalboardData: any
) => {
  if (actualElement.current !== undefined) {
    switch (event.key) {
      case "ArrowLeft":
        movePBElement("left", -1, actualElement, setPedalboardData)
        break
      case "ArrowRight":
        movePBElement("left", 1, actualElement, setPedalboardData)
        break
      case "ArrowUp":
        movePBElement("top", -1, actualElement, setPedalboardData)
        break
      case "ArrowDown":
        movePBElement("top", 1, actualElement, setPedalboardData)
        break
      default:
        break
    }
  }
}
