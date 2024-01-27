import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const [contactData, setContactData] = useState([])

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
      console.log("contact data", data);
      if(response.ok){
        console.log(response);
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
      <h2>Hey there Contacts</h2>
    </>
  );
};

export default AdminContacts;
