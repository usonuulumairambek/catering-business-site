import React from "react";
import "./Indicators.css";
import staticImg from "./images/staticImg.png";
function Indicators() {
  return (
    <div className="Indicators">
      <div className="Indicators__container">
        <div className="Indicators__container-info">
          <div className="Indicators__container-content">
            <h2>Показатели</h2>
            <ul>
              <li>
                Сезон <b> 180 дней в году </b>
              </li>
              <li>
                Оборот <b> 9 млн тенге с</b> ресторана
              </li>
              <li>
                {" "}
                <b> ≈ 120 ресторанов </b>
              </li>
            </ul>
          </div>
        </div>
        <div className="Indicators__container-schedule">
          <img src={staticImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Indicators;
