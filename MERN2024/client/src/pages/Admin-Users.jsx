import { useEffect } from "react"

const AdminUsers = () => {
    
    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers:{
                    Authorization:
                }
            })
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