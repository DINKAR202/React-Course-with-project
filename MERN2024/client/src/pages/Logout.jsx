import { useEffect } from "react";
import {Navigate} from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);


  return <Navigate to="/login" />
};

export default Logout;
