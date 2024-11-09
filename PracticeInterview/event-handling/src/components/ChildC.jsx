
import { useContext } from "react"
import { UserContext } from "../App"

const ChildC = () => {
    const user = useContext(UserContext)
  return (
    <div>
      {user.name}
    </div>
  )
}

export default ChildC
