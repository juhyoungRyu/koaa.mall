import React from "react";
import "../Compo.css";
import { VscMenu } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import logoImg from "../imgs/KOAA.jpg";
import SideMenu from "./SideMenu";

const Navigation = () => {
  // const SideMenu = useRef();
  const openSideMenu = () => {
    // SideMenu.current.style.left = "0";
    console.log("side menu open");
  };

  return (
    <div className="Navigation">
      <section className="logoZone">
        <Link className="logo" to={"/"} />
        {/* <img src={logoImg} alt="" className="logoImg" /> */}
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
        <Link className="iconLink" to={"/login"}>
          <AiOutlineUser className="icon" />
        </Link>
        <Link className="iconLink" to={"/cart"}>
          <BsCart4 className="icon" />
        </Link>
        <Link className="iconLink i4">
          <VscMenu className="icon" onClick={openSideMenu} />
        </Link>
      </section>
    </div>
  );
};

export default Navigation;
