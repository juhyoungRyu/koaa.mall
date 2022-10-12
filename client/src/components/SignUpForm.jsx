import React from "react";
import { Link } from "react-router-dom";
import "../Compo.css";

const SignUpForm = () => {
  return (
    <div className="Scon">
      <section className="Smain">
        <section className="StitleZone">
          <h3 className="Stitle">계정 만들기</h3>
        </section>
        <div className="Sid id">
          <input type="text" className="SidInput idInput" />
        </div>
        <input type="text" className="SpwInput pwInput" />
        <button className="createBtn">
          <span className="createSpan">계정 생성</span>
        </button>
        <Link className="SLink" to={"/login"}>
          <p className="Sif">계정이 이미 있다면?</p>
        </Link>
      </section>
    </div>
  );
};

export default SignUpForm;
