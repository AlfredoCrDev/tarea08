import React from "react";
import './menu.css';
import Logo from "../assets/img/logo.png";

function Menu() {
  return (
    <div className="header">

      <div className="header__logo">

        <img src={Logo} className="header__logo-img" alt="Logo palmera" />
        <a href="http://" className="header__logo-titulo">BeachTour</a>
      </div>

      <div className="header__menu">

        <a href="http://">Home</a>
        <a href="http://">Nosotros</a>
        <a href="http://">Servicios</a>
        <a href="http://">Contacto</a>

      </div>
    </div>
  );
}

export default Menu;
