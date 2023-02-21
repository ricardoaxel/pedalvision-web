import { css } from "@emotion/react"
import { bp } from "../../utils"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
export const style = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { themeReducer } = useSelector((state: RootState) => state)
  return css`
    #topRightSec,
    :before {
      content: ""; /*  for the pseudo to render  */
      flex: 1; /*  take all space left, equally  */
      text-align: right;
    }
    position: absolute;
    top: 0rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    ${bp.tablet} {
      flex-direction: column;
    }
    #logo {
      object-fit: contain;
      height: 2rem;
      filter: ${themeReducer.themeName === "darkTheme"
        ? "invert(100%) brightness(100%) contrast(100%)"
        : "none"};
    }
    #topRightSec {
      /* background-color: red; */
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.8rem;
      color: ${themeReducer.textColor};
      ${bp.tablet} {
        margin-top: 0.25rem;
        align-items: space-between;
        width: 100%;
      }
      ${bp.phone} {
        justify-content: center;
      }
      #userP {
        font-weight: 600;
        margin-right: 0.25rem;
      }
      .headBtn {
        padding-right: 1rem;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 1.2rem;
        transition: 0.2s;
        cursor: pointer;
        :hover {
          background-color: ${themeReducer.textColor};
          color: ${themeReducer.loginBG};
        }
      }
      .logoutBtn {
        margin-left: 0.5rem;
        margin-right: 0rem;
        ${bp.phone} {
          margin-right: 0rem;
          padding: 0.5rem 0rem 0.5rem 0.5rem;
        }
        :hover {
          margin-right: 0.5rem;
        }
      }
      .changeTheme {
        margin-right: 1rem;
      }
    }
  `
}
