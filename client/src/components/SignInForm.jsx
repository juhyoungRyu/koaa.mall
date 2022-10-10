import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Compo.css";
import axios from "axios";

const SignInForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const postTest = async () => {
    await axios.post("/login", {
      id: id,
      pw: pw,
    });
  };

  return (
    <div className="Scon">
      <section className="Smain">
        <section className="StitleZone">
          <h3 className="Stitle">로그인</h3>
        </section>
        <div className="Sid id">
          <form action="POST" className="SidForm idForm">
            <input
              type="text"
              name="id"
              className="SidInput idInput"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              name="pw"
              className="SpwInput pwInput"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <input type="submit" onClick={() => postTest()} />
            {/* <input type="password" className="SpwInput pwInput" /> */}
            {/* <button className="createBtn" onClick={() => loginPost()}>
              <span className="createSpan">로그인</span>
            </button> */}
          </form>
        </div>
        {/* <div className="Spw pw"> */}
        {/* <form action="" className="SpwForm pwForm"></form> */}
        {/* </div> */}
        <Link className="SLink" to={"/signup"}>
          <p className="Sif">계정이 없다면?</p>
        </Link>
      </section>
    </div>
  );
};

export default SignInForm;
