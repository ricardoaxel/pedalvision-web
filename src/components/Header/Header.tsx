// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { style } from "./Header.css"
import { logo } from "../../assets/Images"
import { useAuth0 } from "@auth0/auth0-react"
import { LogoutButton, ChangeThemeButton } from ".."

export const Header = () => {
  const { user } = useAuth0()
  return (
    <div id="topSec" css={style()}>
      <img src={logo} alt="GBM" id={"logo"} />
      <div id="topRightSec">
        <p id="userP" data-testid={"userP"}>
          User:
        </p>
        <p data-testid={"userName"}>{user?.name}</p>
        <LogoutButton className="logoutBtn headBtn" />
        <ChangeThemeButton className="changeTheme headBtn" />
      </div>
    </div>
  )
}
