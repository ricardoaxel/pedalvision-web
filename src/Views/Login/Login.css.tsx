import { css } from "@emotion/react"
import { bp } from "../../utils"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const style = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { themeReducer } = useSelector((state: RootState) => state)

  return css`
    background-color: ${themeReducer.loginBG};
    width: 100%;
    height: 100vh;
    display: flex;
    ${bp.phone} {
      flex-direction: column;
    }
    #leftSec {
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      ${bp.phone} {
        width: 100%;
        height: 55%;
      }

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
      background-color: ${themeReducer.loginBG};
      flex: 1 1 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.4s;
      .themeBtn {
        position: absolute;
        right: 0.5rem;
        top: 1rem;
        width: 2em;
        height: 2rem;
        z-index: 3;
        color: ${themeReducer.textColor};
        transition: 0.2s;
        :hover {
          color: #15d4e2;
        }
      }
      #formContainer {
        z-index: 2;
        color: ${themeReducer.textColor};
        border: 0.1px solid white;
        border-radius: 0.7rem;
        width: 70%;
        height: auto;
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        box-shadow: 0px 1px 14px 5px #dbf5fc60;
        transition: 0.2s;
        :hover {
          background-color: white;
          border: none;
          color: black;
        }

        #title {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          text-align: center;
        }
        .formInput {
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }
        .loginBtn {
          width: 100%;
        }
      }
    }
    .mainloader {
      background-color: #151522ac;
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
}
