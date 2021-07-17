import React from "react";
import "./areas.css";
import mapImg from "./images/mapImg.png";
function Shymkent() {
  return (
    <div className="areas__almata">
      <div className="areas__almata-map">
        <img src={mapImg} alt="" />
      </div>
      <div className="areas__almata-about">
        <h2>Чимкентская  область:</h2>
        <p>
          Площадь - <b> 117 249 км</b> <br /> Население - <b>2 000 016 чел.</b>{" "}
          <br /> ВВП - <b> 1 290 844,4 </b>(данные приведены в миллионах тенге){" "}
          <br /> <b> 4.4% </b>от всей страны
        </p>
      </div>
    </div>
  );
}

export default Shymkent;
