// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { loginBG, logo } from "../../assets/Images"
import { LoginButton, Loader, ChangeThemeButton } from "../../components"
import { style } from "./Login.css"
import { useAuth0 } from "@auth0/auth0-react"
interface Props {
  className?: string
}

export const Login = ({ className }: Props) => {
  const { isLoading } = useAuth0()

  return (
    <div css={style()} className={className}>
      <div id="leftSec">
        <img src={loginBG} alt="GBM" id={"bg"} />
        <img src={logo} alt="GBM" id={"logo"} />
      </div>
      <div id="rightSec">
        <ChangeThemeButton className="themeBtn" />
        <form id="formContainer" onSubmit={(e) => e.preventDefault()}>
          <h1 id={"title"}>
            {`Start seeing "Índice de Precios y Cotizaciones"`}
          </h1>
          <LoginButton />
        </form>
      </div>
      {isLoading && <Loader className={"mainloader"} />}
    </div>
  )
}
