import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitPage from "./pages/brandCarnival/wait";
import HomePage from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WaitPage" element={<WaitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
