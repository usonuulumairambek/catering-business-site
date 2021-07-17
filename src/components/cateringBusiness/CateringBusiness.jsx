import React from "react";
import image1 from "./images/Component.png";
import image2 from "./images/Component-1.png";
// import image3 from "./images/Component-2.png";
import taildown from "./images/tail-down.svg";

import "./cateringBusiness.css";
function CateringBusiness() {
  return (
    <div className="cateringBusiness">
      <div className="cateringBusiness__info">
        <div className="cateringBusiness__wrapper">
          <div className="cateringBusiness__info-tittle">
            <p>
              <b>От 2 000 000 $ в год</b> <br /> на ресторанах не имея <br />{" "}
              свои рестораны
            </p>
          </div>
          <div className="cateringBusiness__info-subtittle">
            <p>
              Зарабатывай на культурных традициях казахстанцев, <br /> продавая
              самые приятные воспоминания
            </p>
          </div>

          <div className="cateringBusiness__info-btn">
            <button>Запросить Marketing-kit</button>
          </div>
          <div className="cateringBusiness__info-taildoun">
            <img src={taildown} alt="" />
          </div>
        </div>
      </div>
      <div className="cateringBusiness__slide">
        <div className="cateringBusiness__slide-items">
          <div className="cateringBusiness__slide-item">
            <img src={image1} alt="" />
          </div>{" "}
          <div className="cateringBusiness__slide-item">
            <img src={image2} alt="" />
          </div>{" "}
          {/* <div className="cateringBusiness__slide-item">
            <img src={image3} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CateringBusiness;
