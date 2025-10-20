import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { userLoggedIn, user } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-md px-8">
      <div className="flex-1 space-x-6">
        <Link
          to="/"
          className="flex items-center space-x-6 text-2xl font-bold text-primary"
        >
          <img src={logo} alt="logo" height={30} width={30} className="mr-2" />
          <span>AI Assistant</span>
        </Link>
      </div>
      <div className="flex-none space-x-6">
        {user && user.role === "admin" && (
          <Link to="/admin" className="btn btn-ghost btn-lg">
            Admin
          </Link>
        )}
        <Link
          to={userLoggedIn ? "/youtube-transcriber" : "/login"}
          className="btn btn-ghost btn-lg"
        >
          YouTube Transcriber
        </Link>
        <Link
          to={userLoggedIn ? "/pdf-summarizer" : "/login"}
          className="btn btn-ghost btn-lg"
        >
          PDF Summarizer
        </Link>
        <Link
          to={userLoggedIn ? "/writer" : "/login"}
          className="btn btn-ghost btn-lg"
        >
          AI Writer
        </Link>
        <Link
          to={userLoggedIn ? "/workspace" : "/login"}
          className="btn btn-ghost btn-lg"
        >
          Workspace
        </Link>
        <Link to="/contact" className="btn btn-ghost btn-lg">
          Contact us
        </Link>
        {userLoggedIn ? (
          <Link to="/logout" className="btn btn-primary btn-lg">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
