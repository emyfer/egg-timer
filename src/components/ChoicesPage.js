import React from "react";
import "./choicesPage.css"
import { useNavigate } from 'react-router-dom';


function ChoicesPage() {

    const navigate = useNavigate();

    const handleClick = (time) => {
        navigate('/timer', { state: { time} }); 
    };


  return (
    <div className="choices">
      <p className="question">What are you making today?</p>
      <div className="options">
        <div className="option">
            <img alt="soft" src="./soft.png" onClick={() => handleClick(300)}></img>
            <p>Soft boiled egg</p>
        </div>
        <div className="option">
            <img alt="fried" src="./fried.png" onClick={() => handleClick(240)}></img>
            <p>Fried egg</p>
        </div>
        <div className="option">
            <img alt="hard" src=".\hard.png" onClick={() => handleClick(660)}></img>
            <p>Hard boiled egg</p>
        </div>
        <div className="option">
            <img alt="scrambled" src="./scrambled.png" onClick={() => handleClick(180)}></img>
            <p >Scrambled eggs</p>
        </div>
      </div>
    </div>
  );
}

export default ChoicesPage;
