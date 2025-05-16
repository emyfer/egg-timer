import React from "react";
import "./finalPage.css"
import { useNavigate } from 'react-router-dom';



function FinalPage() {
    const navigate = useNavigate();

  return (
      <div className="final">
        <img alt="happy" src=".\happyegg.png"></img>
        <p>Your egg is ready!</p>
        <button onClick={() => navigate("/")}>Go again</button>
      </div>
  );
}

export default FinalPage;
