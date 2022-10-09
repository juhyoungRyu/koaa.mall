import React from "react";
import "../App.css"
import logoImg from "../imgs/KOAA.jpg";

const SideMenu = () => {
  return <div className="SideMenu">
    <div className="SideNav">
      <img className="SideLogoImg" src={ logoImg } alt="" />
      <div className="SLI">
        <span className="SLIspan">Login</span>
      </div>
      <div className="SJ">
        <span className="SJspan">Join</span>
      </div>
    </div>
    <div className="SideMain">
      <div className="SideList">
        <span className="about list">About</span>
      </div>
      <div className="SideList">
        <span className="lookbook list">Lookbook</span>
      </div>
      <div className="SideList">
        <span className="shop list">Shop</span>
      </div>
      <div className="SideList">
        <span className="cart list">Cart</span>
      </div>
    </div>
  </div>;
};

export default SideMenu;
