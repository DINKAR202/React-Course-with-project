import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);

  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log("contact data", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Delete user DAta function
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users after delete: ${data}`);
      if (response.ok) {
        toast.success("Deleted Successfully");
        getContactsData();
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>User Contacts Data</h1>
        </div>

        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((curContactData, index) => {
                const { username, email, message, _id } = curContactData;

                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{message}</td>
                    <td>
                      <button
                        onClick={() => deleteContactById(_id)}
                        className="button-62"
                        role="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* <section className="admin-users-section">
        <h1>Admin Contacts Data</h1>
        <div className="container admin-users">
          {contactData.map((curContactData, index) => {
            const { username, email, message } = curContactData;
            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn">delete</button>
              </div>
            );
          })}
        </div>
      </section> */}
    </>
  );
};

export default AdminContacts;
