import React from "react";
import "./main.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CateringBusiness from "../components/cateringBusiness/CateringBusiness";
import Franchise from "../components/franchise/Franchise";
import Indicators from "../components/Indicators/Indicators";
import Benefits from "../components/Benefits/Benefits";
function main() {
  return (
    <div className="main">
      <Header />
      <CateringBusiness />
      <Franchise />
      <Indicators />
      <Benefits  />
      <Footer />
    </div>
  );
}

export default main;
