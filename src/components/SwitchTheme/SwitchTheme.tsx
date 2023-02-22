import { Style } from "./SwitchTheme.css"
import { BsMoonFill, BsFillSunFill } from "react-icons/bs"
import { themes } from "../../context/Themes"
import { useSession } from "../../hooks"

export const SwitchTheme = ({
  style,
  children,
  className,
  onClick,
  type,
  dataTip,
}) => {
  const sessionInfo = useSession()
  let actualTheme = sessionInfo.sessionState.actualTheme.displayName
  const changeTheme = (light) => {
    sessionInfo.dispatch({
      type: "field",
      field: "actualTheme",
      value: light ? themes.darkTheme : themes.lightTheme,
    })
  }
  return (
    <div css={Style()} onClick={() => changeTheme(actualTheme === "Light")}>
      <div className="circleContainer">
        {actualTheme === "Light" ? <BsFillSunFill /> : <BsMoonFill />}
      </div>
    </div>
  )
}
