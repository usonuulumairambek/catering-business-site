import React from "react";
import "./footer.css";
import logoFooter from "./images/logo.svg";
import twlogo from "./images/twlogo.svg";
import inslogo from "./images/inslogo.svg";
import fblogo from "./images/fblogo.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-logo">
          <img src={logoFooter} alt="" />
        </div>
        <div className="footer__container-items">
          <h3>Контакты</h3>
          <a className="footer__container-phone" href="tel:+996700700700">+996 700 700 700</a> <br />
          <a className="footer__container-phone" href="tel:+996700700700">+996 500 500 500</a>
          <div className="footer__container__logos">
            <div className="footer__container__logos-fb">
              <img src={fblogo} alt="" />
            </div>
            <div className="footer__container__logos-ins">
              <img src={inslogo} alt="" />
            </div>
            <div className="footer__container__logos-tw">
              <img src={twlogo} alt="" />
            </div>
          </div>
        </div>
        <div className="footer__container-items">
          <h3>Адрес</h3>
          <p>
            г. Бишкек <br />
            ул. Абдрахманова 235
          </p>
        </div>
        <div className="footer__container-items">
          <h3>Оставь заявку прямо сейчас</h3>
          <div className="footer__container-form">
            <input type="text" placeholder="Имя" /> <br />
            <input type="tell" placeholder="Телефон" />
          </div>
        </div>
        <div className="footer__container-button">
            <button className="footer__container-btn">Отправить</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
