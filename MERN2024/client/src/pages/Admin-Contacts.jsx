import { useEffect } from "react";

const AdminContacts = () => {

  const getContactsData = async () => {
    
  }

  useEffect(()=>{
    getContactsData();
  }, []);

  return (
    <div>Admin-Contacts</div>
  )
}

export default AdminContacts;