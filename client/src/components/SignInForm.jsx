import React from "react";
import "../Compo.css";

const SignInForm = () => {
  return (
    <div className="SICon">
      <section className="SUmain">
        <h3 className="SItit">로그인</h3>
        <div className="SIid id">
          <form action="" className="SIidForm idForm">
            <input type="text" className="SIidInput idInput" />
          </form>
        </div>
        <div className="SIpw pw">
          <form action="" className="SIpwForm pwForm">
            <input type="text" className="SIpwInput pwInput" />
          </form>
        </div>
        <button className="createBtn">
          <span className="createSpan">로그인</span>
        </button>
        <p className="SIif"></p>
        <div className="outline"></div>
        <h3 className="brand">Korean Oriental And Asian</h3>
      </section>
    </div>
  );
};

export default SignInForm;
