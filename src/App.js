import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.js";
import ChoicesPage from "./components/ChoicesPage.js";
import TimerPage from './components/TimerPage.js';
import FinalPage from './components/FinalPage.js';
import Image from "./Background.png"

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Image})`}}>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choices" element={<ChoicesPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/final" element={<FinalPage />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
