import React from "react";
import "../Compo.css";
import { VscMenu } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <section className="logoZone">
        <Link className="logo" to={"/"} />
      </section>
      <section className="iconZone">
        <AiOutlineInstagram
          className="icon i1"
          onClick={() =>
            window.open("https://instagram.com/koreanorientalandasian/")
          }
        />
        <BsCart4 className="icon i2" />
        <VscMenu className="icon i3" />
      </section>
    </div>
  );
};

export default Navigation;
