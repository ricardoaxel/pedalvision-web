import { css } from "@emotion/react"
import { bp } from "../../utils"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const style = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { themeReducer } = useSelector((state: RootState) => state)
  const headerSize = 2
  return css`
    color: ${themeReducer.textColor};
    background-color: ${themeReducer.homeBG};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: color 0.3s, background-color 0.3s;

    #centerContainer {
      width: 80%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      transition: 0.5s width;
      h1 {
        width: 100%;
      }
      ${bp.tablet} {
        width: 90%;
      }
      #graphContainer {
        margin-top: 2rem;
        margin-bottom: 2rem;
        ${themeReducer.themeName === "lightTheme"
          ? "background-color: transparent; border: 1px solid #f7f8fd;"
          : "background-color: #424a6822;"}

        border-radius: 0.5rem;
        padding: 1rem;
        box-sizing: border-box;
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        #headgraphContainer {
          height: ${`${headerSize}rem`};
          width: 100%;
          display: flex;

          h2 {
            font-size: 1.25rem;
            width: 100%;
            text-align: center;
          }
          button {
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            background-color: transparent;
            border: 1px solid whitesmoke;
            padding: 0.5rem;
            border-radius: 0.25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2rem;
            .icon {
              color: ${themeReducer.textColor};
              font-size: 1.25rem;
            }
            transition: 0.2s;
            :hover {
              background-color: #15d4e2;
              color: ${themeReducer.loginBG};
              .icon {
                color: white;
              }
            }
          }
        }
        #graphArea {
          width: 100%;
          height: ${`calc(100% - ${headerSize}rem)`};
          display: flex;
          justify-content: center;
          align-items: center;
          .graph {
            object-fit: fill;
            width: 95%;
            height: 90%;
          }
          .slider {
            width: 100%;
            height: 100%;
          }
        }
      }
      .slider {
        width: 100%;
        text-align: center;
        transition: 0.5s width;
        ${bp.tablet} {
          width: 80%;
        }
        ${bp.tablet} {
          width: 70%;
        }
      }
    }
    .loader {
      position: fixed;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
}
