// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
//** LEGACY CODE FOR A CUSTOM LOGIN THAT WAS NOT IMPLEMENTED */
import { useEffect, useState } from "react"
import { loginBG, logo } from "../../assets/Images"
import { CustomButton, CustomInput } from "../../components"
import { style } from "./Login.css"
import { useAuth0 } from "@auth0/auth0-react"
interface Props {
  className?: string
}

interface Field {
  label: string
  name: string
  value: string
  error: string
}
export const LoginButton = () => {
  const { loginWithPopup } = useAuth0()

  return <button onClick={() => loginWithPopup()}>Login</button>
}

export const Login = ({ className }: Props) => {
  const [fields, setFields] = useState<Field[]>([])
  const [isLoginForm, setIsLoginForm] = useState(true)

  useEffect(() => {
    if (isLoginForm) {
      setFields([
        {
          label: "email",
          name: "Email",
          value: "",
          error: "",
        },
        {
          label: "password",
          name: "Password",
          value: "",
          error: "",
        },
      ])
    } else {
      setFields([
        {
          label: "name",
          name: "Name",
          value: "",
          error: "",
        },
        {
          label: "email",
          name: "Email",
          value: "",
          error: "",
        },
        {
          label: "password",
          name: "Password",
          value: "",
          error: "",
        },
      ])
    }
  }, [isLoginForm])

  const modifyField = (fields, index, field, value) => {
    setFields([
      ...fields.slice(0, index),
      { ...field, value },
      ...fields.slice(index + 1, fields.length),
    ])
  }

  const saveFields = () => {
    setFields([
      ...fields.map((field) =>
        field.value === ""
          ? { ...field, error: "empty" }
          : { ...field, error: "" }
      ),
    ])
    if (isLoginForm) {
    } else {
    }
  }

  return (
    <div css={style()} className={className}>
      <div id="leftSec">
        <img src={loginBG} alt="GBM" id={"bg"} />
        <img src={logo} alt="GBM" id={"logo"} />
        <h1>IPC indicator</h1>
      </div>
      <div id="rightSec">
        <form id="formContainer" onSubmit={(e) => e.preventDefault()}>
          {" "}
          <h1 id={"title"}> {isLoginForm ? "Login" : "Register"}</h1>
          {fields.map((field, index) => (
            <>
              <label className="nameField">{field.name}</label>

              <CustomInput
                className={"formInput"}
                value={field.value}
                onChange={(e) =>
                  modifyField(fields, index, field, e.target.value)
                }
              />
              {field.error !== "" && <p>{field.error}</p>}
            </>
          ))}
          <CustomButton className={"loginBtn"} onClick={(e) => saveFields(e)}>
            {isLoginForm ? "Login" : "Register"}
          </CustomButton>
          <div id="bottomText">
            <p> {isLoginForm ? "New user? " : "Already registered?"} </p>
            <button
              id="formChange"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm ? "Register" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
