import { useAuth0 } from "@auth0/auth0-react"
import { FiLogOut } from "react-icons/fi"

export const LogoutButton = ({ className }: { className?: string }) => {
  const { logout } = useAuth0()
  return (
    <FiLogOut
      className={className}
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  )
}
