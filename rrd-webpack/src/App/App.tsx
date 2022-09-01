import React from "react";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>{location.pathname}</h1>} />
        <Route path="/asdf" element={<h1>{location.pathname}</h1>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default App;
