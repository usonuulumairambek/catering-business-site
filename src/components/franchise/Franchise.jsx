import React from "react";
import Almata from "./areas/Almata";
import "./franchise.css";
function Franchise() {
  return (
    <div className="franchise">
      <div className="franchise__tittle">
        <h1> Забрать свою франшизу</h1>
        <h3>Стань эксклюзивным владельцем своего региона</h3>
      </div>
      <div className="franchise__navbar">
        <div className="franchise__navbar-items">
          <div className="header__feedback-btn">
            <button>Алматы</button>
          </div>
        </div>
        <div className="franchise__navbar-items">
          <div className="header__feedback-btn">
            <button>Шымкент</button>
          </div>
        </div>
        <div className="franchise__navbar-items">
          <div className="header__feedback-btn">
            <button>Астана</button>
          </div>
        </div>
        <div className="franchise__navbar-items">
          <div className="header__feedback-btn">
            <button>Помогите мне с выбором</button>
          </div>
        </div>
      </div>
      <Almata />
    </div>
  );
}

export default Franchise;
