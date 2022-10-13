import React, {useState, useEffect} from "react";
import "../App.css"
import logoImg from "../imgs/KOAA.jpg";
import Navigation from "./Navigation";

const SideMenu = () => {

  return <div className="sideMenu">
    <div className="sideNav">
      <img className="sideLogoImg" src={ logoImg } alt="" />
      <div className="SLI">
        <span className="SLIspan">Login</span>
      </div>
      <div className="SJ">
        <span className="SJspan">Join</span>
      </div>
    </div>
    <div className="sideMain">
      <div className="sideList">
        <span className="about list">About</span>
      </div>
      <div className="sideList">
        <span className="lookbook list">Lookbook</span>
      </div>
      <div className="sideList">
        <span className="shop list">Shop</span>
      </div>
      <div className="sideList">
        <span className="cart list">Cart</span>
      </div>
    </div>
  </div>;
};

export default SideMenu;
