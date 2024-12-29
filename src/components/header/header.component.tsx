import { CircleUserRound } from "lucide-react"

const Header = () => {
  return (
    <div>
      <h1>
        Favour's Space
      </h1>

      {/* Breadcrumbs */}

      <div>
        {/* If user is signed in, sign out else sign in */}
        <CircleUserRound className="text-blue-500"/>
      </div>
    </div>
  )
}

export default Header