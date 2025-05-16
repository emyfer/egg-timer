import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landingPage">
      <h1 className="title">Egg Timer</h1>
      <button className="start-btn" onClick={() => navigate("/choices")}>
        Start counting
      </button>
    </div>
  );
}

export default LandingPage;
