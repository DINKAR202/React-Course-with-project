import { useEffect } from "react";

const AdminContacts = () => {

  useEffect(()=>{
    getContactsData();
  }, []);

  return (
    <div>Admin-Contacts</div>
  )
}

export default AdminContacts;