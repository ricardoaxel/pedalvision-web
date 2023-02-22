import { useSession } from "../context/sessionContext"

export const useTheme = () => {
  const sessionInfo = useSession()
  const theme = sessionInfo.sessionState.actualTheme
  return theme
}
