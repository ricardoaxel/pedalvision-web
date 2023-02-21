// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unknown-property */
import { style } from "./ChangeThemeButton.css"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { changeTheme } from "../../store/slices/themeSlice"
import { RootState } from "../../store"

export const ChangeThemeButton = ({ className }: { className: string }) => {
  const { themeReducer } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  return (
    <>
      {themeReducer.themeName == "darkTheme" ? (
        <BsFillSunFill
          css={style()}
          className={className}
          onClick={() => dispatch(changeTheme())}
        />
      ) : (
        <BsFillMoonFill
          css={style()}
          className={className}
          onClick={() => dispatch(changeTheme())}
        />
      )}
    </>
  )
}
