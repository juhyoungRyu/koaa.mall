import React from "react";
import pdtData from "./Datas";
import "../Compo.css";

const Shop = () => {
  return (
    <div className="Shop">
      <div className="shopNav">
        <span className="S_all usher S_active">ALL |</span>
        <span className="S_outer usher"> OUTER |</span>
        <span className="S_top usher"> TOP |</span>
        <span className="S_bottom usher"> BOTTOM |</span>
        <span className="S_acc usher"> ACC</span>
      </div>
      <div className="S_productsCon">
        <div className="S_product">
          <div className="S_pdtImg"></div>
          <span className="S_pdtName">{pdtData[0].name}</span>
          <span className="S_price">{pdtData[0].price} KRW</span>
        </div>
        <div className="S_product">
          <div className="S_pdtImg"></div>
          <span className="S_pdtName">KOAA CANDY SWEATSHIRT</span>
          <span className="S_price">28,000 KRW</span>
        </div>
  
      </div>
    </div>
  );
};

export default Shop;
