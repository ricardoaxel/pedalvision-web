import { css } from "@emotion/react"
import { dimensions } from "../../utils"

export const style = () => {
  const headerSize = 2
  return css`
    background-color: #000000;
    width: 100%;
    height: 100vh;
    display: flex;
    #leftSec {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      #bg {
        position: absolute;
        left: 0%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }
      #logo {
        filter: invert(100%) brightness(100%) contrast(100%);
        height: 3rem;
        z-index: 2;
      }
      h1 {
        margin-left: 1.5rem;
        font-size: 1.4rem;
        z-index: 2;
      }
    }
    #rightSec {
      background-color: black;
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      #formContainer {
        z-index: 2;
        color: white;
        border: 1px solid white;
        border-radius: 0.7rem;
        width: 70%;
        height: 50%;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        border-left: 1px solid white;
        #title {
          margin-bottom: 1.5rem;
          font-size: 1.7rem;
        }
        .formInput {
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }
        .loginBtn {
          margin-top: 1.25rem;
        }
        #bottomText {
          display: flex;
          margin-top: 1rem;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;

          #formChange {
            margin-left: 0.5rem;
            color: #bccaff;
            border: none;
            border-bottom: 1px solid#bccaff;
            cursor: pointer;
            background-color: transparent;
            padding: 0.1rem 0rem;
          }
        }
      }
    }
  `
}
