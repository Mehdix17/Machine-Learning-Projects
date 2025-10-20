import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { setUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserLoggedIn(false); // Update context state
    navigate("/");
  }, [navigate, setUserLoggedIn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Logging out...</h2>
        <p>You are being redirected to the login page.</p>
      </div>
    </div>
  );
}
