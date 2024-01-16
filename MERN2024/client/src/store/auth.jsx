/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // Include other authentication-related values/functions here
  const authValues = {
    storeTokenInLS,
    LogoutUser,
    isLoggedIn,
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn)

// tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
