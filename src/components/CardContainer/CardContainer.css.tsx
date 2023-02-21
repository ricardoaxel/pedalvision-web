import { css } from "@emotion/react"
import { useWindowSize } from "../../hooks/useWindowSize"
import { dimensions } from "../../utils"

export const style = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const windowSize = useWindowSize()

  return css`
    background-color: #2e10101f;
    border: 2px solid #61dafb;
    border-radius: 0.75rem;
    transition: 0.4s;
    width: 100%;
    /* ${`${windowSize.width < dimensions.tablet ? "height: 20%" : ""}`}; */
    box-shadow: 0px 5px 6px 1px #dbf5fc95;
    color: white;
    .contentArea {
      margin: 1rem;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      /* background-color: #61dafb10; */
      border-radius: 0.5rem;
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
    }
    :hover {
      background-color: #61dafb10;
    }
  `
}
