import { css } from "@emotion/react"
export const style = () => {
  return css`
    all: unset;
    background-color: transparent;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    text-align: center;
    font-weight: 500;
    background: #ffffff;
    color: #000000;
    font-size: 0.9rem;
    padding: 0.75rem;
    cursor: pointer;

    font-size: 0.9rem;
    border: 1px solid #bdc0cb42;
    transition: all 0.2s, padding 0.1s;
    :hover {
      background: transparent;
      border: 1px solid #bdc0cb86;
      border-radius: 1.5rem;
      font-weight: 600;
      padding: 0.85rem;
    }
  `
}
