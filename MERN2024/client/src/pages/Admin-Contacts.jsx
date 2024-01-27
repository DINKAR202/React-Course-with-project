import { useEffect } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const getContactsData = async () => {
    const authorizationToken = useAuth();

    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return <div>Admin-Contacts</div>;
};

export default AdminContacts;
