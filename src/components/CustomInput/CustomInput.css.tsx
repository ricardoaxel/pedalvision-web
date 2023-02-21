import { css } from "@emotion/react"
export const style = () => {
  return css`
    all: unset;
    background-color: transparent;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: 0.2s;
    :focus {
      background-color: #a6b1d63a;
      padding: 0.65rem;
    }
  `
}
