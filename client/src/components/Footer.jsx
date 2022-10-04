import React from "react";
import "../Compo.css";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <section className="footerTitle">
        <h3>Korean Oriental And Asian</h3>
      </section>
      <section className="footerBold">
        <section className="instaZone">
          <AiOutlineInstagram className="instagram" />
        </section>
        <h4 className="tel">T. 010-0000-0000</h4>
      </section>
      <section className="footerSlim">
        COMPANY: 주식회사 코아 | OWNER: 이정호 <br />
        ADDRESS: 남양주시 와부읍 덕소로 000, 00
        <br />
        사업자번호: 000-00-00000 | MAIL: jungholee@email.com
      </section>
    </div>
  );
};

export default Footer;
