import React from "react";
import { Link } from "react-router-dom";
import "../Compo.css";

const SignInForm = () => {
  return (
    <div className="Scon">
      <section className="Smain">
        <section className="StitleZone">
          <h3 className="Stitle">로그인</h3>
        </section>
        <div className="Sid id">
          <form action="" className="SidForm idForm">
            <input type="text" className="SidInput idInput" />
          </form>
        </div>
        <div className="Spw pw">
          <input type="text" className="SpwInput pwInput" />
          <form action="" className="SpwForm pwForm"></form>
        </div>
        <button className="createBtn">
          <span className="createSpan">로그인</span>
        </button>
        <Link to={"/signup"}>
          <p className="Sif">계정이 없다면?</p>
        </Link>
      </section>
    </div>
  );
};

export default SignInForm;
