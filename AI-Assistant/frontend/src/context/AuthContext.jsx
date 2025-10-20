import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    setUserLoggedIn(!!token);
    setUser(userData ? JSON.parse(userData) : null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ userLoggedIn, setUserLoggedIn, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
