import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Hero() {
  const navigate = useNavigate();
  const { userLoggedIn } = useContext(AuthContext);

  const handleClick = () => {
    userLoggedIn ? navigate("/workspace") : navigate("/login");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Your AI Assistant for Smarter Notes
          </h1>
          <p className="py-6 text-lg">
            Transform your text into structured insights using the power of AI.
            Summarize, generate ideas, and organize your thoughts instantly.
          </p>
          <button className="btn btn-primary btn-lg" onClick={handleClick}>
            Try it Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
