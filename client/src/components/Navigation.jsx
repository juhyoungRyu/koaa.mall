import React from "react";
import "../Compo.css";
import { VscMenu } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Navigation = () => {
  return (
    <div className="Navigation">
      <section className="logoZone">
        <div className="logo" />
      </section>
      <section className="iconZone">
        <AiOutlineInstagram className="icon i1" />
        <BsCart4 className="icon i2" />
        <VscMenu className="icon i3" />
      </section>
    </div>
  );
};

export default Navigation;
