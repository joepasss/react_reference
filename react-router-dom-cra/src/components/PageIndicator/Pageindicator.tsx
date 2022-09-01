import React from "react";
import { useLocation } from "react-router-dom";

const Pageindicator = () => {
  const location = useLocation();

  return <div className="container">{location.pathname}</div>;
};

export default Pageindicator;
