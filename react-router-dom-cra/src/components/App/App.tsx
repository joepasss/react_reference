import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageIndicator from "../PageIndicator";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/page-indicator" element={<PageIndicator />} />
        <Route path="*" element={<Navigate to={"/page-indicator"} />} />
      </Routes>
    </div>
  );
}

export default App;
