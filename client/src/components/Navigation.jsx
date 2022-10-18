import React from "react";
import "../Compo.css";
import { VscMenu } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import logoImg from "../imgs/KOAA LOGO OG (1).png";

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <section className="logoZone">
        <Link className="logo" to={"/"}>
          <img src={logoImg} alt="" className="logoImg" />
        </Link>
      </section>
      <section className="iconZone">
        <Link
          className="iconLink"
          onClick={() =>
            window.open("https://instagram.com/koreanorientalandasian/")
          }
        >
          <AiOutlineInstagram className="icon" />
        </Link>
        <Link className="iconLink" to={"/mypage"}>
          <AiOutlineUser className="icon" />
        </Link>
        <Link className="iconLink" to={"/cart"}>
          <BsCart4 className="icon" />
        </Link>
        <Link className="iconLink i4">
          <VscMenu className="icon" onClick={() => props.smt()} />
        </Link>
      </section>
    </div>
  );
};

export default Navigation;
