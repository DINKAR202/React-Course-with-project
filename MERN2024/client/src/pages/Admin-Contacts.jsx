import { useEffect } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const authorizationToken = useAuth();
  console.log("authorizationToken", authorizationToken)

  const getContactsData = async () => {

    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("Response data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <h2>Hey there Contacts</h2>
    </>
  );
};

export default AdminContacts;
