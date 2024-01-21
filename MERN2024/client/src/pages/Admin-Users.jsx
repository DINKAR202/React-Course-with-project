import { useEffect } from "react"
import { useAuth } from "../store/auth"

const AdminUsers = () => {

    const {authorizationToken} = useAuth();
    
    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers:{
                    Authorization: authorizationToken,
                },
            })
            const data = await response.json();
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
    <div>AdminUsers</div>
  )
}

export default AdminUsers