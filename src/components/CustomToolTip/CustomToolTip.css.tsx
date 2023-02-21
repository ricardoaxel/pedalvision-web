import { css } from "@emotion/react"

export const style = () => {
  return css`
    background-color: #2e10101f;
    border: 2px solid #61dafb;
    border-radius: 0.75rem;
    transition: 0.4s;
    width: 100%;
    box-shadow: 0px 5px 4px 1px #dbf5fc60;
    color: white;
    padding: 0.5rem 0.75rem;
    h4 {
      margin-bottom: 0.5rem;
    }
    ul {
      /* list-style-type: circle; */
      margin: 0;
      padding: 0;
      li {
        display: flex;
        font-size: 0.8rem;
        margin-bottom: 0.15rem;
        .tagName {
          font-weight: 600;
          margin-right: 0.5rem;
        }
      }
    }
  `
}
