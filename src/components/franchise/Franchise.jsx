import React from "react";
import Almata from "./areas/Almata";
import "./franchise.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Astana from "./areas/Astana";
import Shymkent from "./areas/Shymkent";
import Help from "./areas/Help";

function Franchise() {
  return (
    <BrowserRouter>
      <div className="franchise">
        <div className="franchise__tittle">
          <h1> Забрать свою франшизу</h1>
          <h3>Стань эксклюзивным владельцем своего региона</h3>
        </div>

        <div className="franchise__navbar">
          <div className="franchise__navbar-items">
            <div className="header__feedback-btn">
              <Link to="/almaty">Алматы</Link>
            </div>
          </div>
          <div className="franchise__navbar-items">
            <div className="header__feedback-btn">
              <Link to="/shymkent">Шымкент</Link>
            </div>
          </div>
          <div className="franchise__navbar-items">
            <div className="header__feedback-btn">
              <Link to="/astana">Астана</Link>
            </div>
          </div>
          <div className="franchise__navbar-items">
            <div className="header__feedback-btn">
              <Link to="/help">Помогите мне с выбором</Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/almaty">
            <Almata />
          </Route>
          <Route path="/astana">
            <Astana />
          </Route>{" "}
          <Route path="/shymkent">
            <Shymkent />
          </Route>{" "}
          <Route path="/help">
            <Help />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Franchise;
