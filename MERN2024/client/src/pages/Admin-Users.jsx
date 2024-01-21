import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>

        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
          </table>
          {users.map((curUser, index) => {
            return <h2 key={index}>{curUser.username}</h2>;
          })}
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
