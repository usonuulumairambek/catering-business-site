import React from "react";
import "./areas.css";
import mapImg from "./images/mapImg.png";
function Almata() {
  return (
    <div className="areas__almata">
      <div className="areas__almata-map">
        <img src={mapImg} alt="" />
      </div>
      <div className="areas__almata-about">
        <h2>Алматинская область:</h2>
        <p>
          Площадь - <b> 223 911 км</b> <br /> Население - <b>2 077 656 чел.</b>{" "}
          <br /> ВВП - <b> 1 890 574,4 </b>(данные приведены в миллионах тенге){" "}
          <br /> <b> 4.4% </b>от всей страны
        </p>
      </div>
    </div>
  );
}

export default Almata;
