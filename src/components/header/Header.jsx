import React from "react";
import './header.css'
import headerImg from "./images/logo.svg";
import callImg from "./images/callImg.svg";
function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={headerImg} alt="" />
        </div>
        <div className="header__feedback">
          <div className="header__feedback-callImg">
            <img src={callImg} alt="" />
            <span>
              <a
                href="tel:+996999450450"
              >
                +996 999 450 450
              </a>
            </span>
          </div>
          <div className="header__feedback-btn">
            <button>Запросить звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
