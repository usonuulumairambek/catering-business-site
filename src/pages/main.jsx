import React from "react";
import "./main.css";

import CateringBusiness from "../components/cateringBusiness/CateringBusiness";
import Franchise from "../components/franchise/Franchise";
import Indicators from "../components/Indicators/Indicators";
import Benefits from "../components/Benefits/Benefits";
function main() {
  return (
    <div className="main">
      <CateringBusiness />
      <Franchise />
      <Indicators />
      <Benefits  />
    </div>
  );
}

export default main;
