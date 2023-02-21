import { useAuth0 } from "@auth0/auth0-react"
import { CustomButton } from "../CustomButton"

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0()

  return (
    <CustomButton onClick={() => loginWithPopup()} className={"loginBtn"}>
      Login / Register
    </CustomButton>
  )
}
