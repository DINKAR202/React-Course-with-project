import { useEffect } from "react"

const AdminUsers = () => {
    
    const getAllUsersData = async () => {
        try {
            
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