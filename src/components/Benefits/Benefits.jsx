import React from "react";
import "./benefits.css";
import benefitsImg from "./images/benefitsImg.png";
function Benefits() {
  return (
    <div className="benefits">
      <div className="benefits__container">
        <div className="benefits__container-tittle">
          <h2>Преимущества</h2>
        </div>
        <div className="benefits__container-img">
          <img src={benefitsImg} alt="" />
          <div className="benefits__container-info">
            <div className="benefits__container-items">
              <div className="benefits__container-item">
                <h3>Собственная CRM</h3> <h3> Инновационные технологии </h3>{" "}
                <h3>Конфиденциальность ресторанов </h3>{" "}
                <h3> 15 лет опыта на рынке </h3>{" "}
                <h3>Полный онлайн контроль за финансовым оборотом </h3>{" "}
                <h3>
                  {" "}
                  Полный онлайн контроль за эффективностью каждого сотрудника{" "}
                </h3>{" "}
                <h3> Легко масштабируемая бизнес модель </h3>{" "}
                <h3> Один владелец на регион</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
