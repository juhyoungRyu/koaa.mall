import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Compo.css";
import axios from "axios";

const SignInForm = (props) => {
  const KEY = "@loginData";
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const postTest = async () => {
    await axios
      .post("/login", {
        id: id,
        pw: pw,
      })
      .then((res) => {
        if (typeof res.data === "string") {
          alert(JSON.stringify(res.data));
        } else {
          localStorage.setItem(KEY, JSON.stringify(res.data));
          props.setIsLogin(JSON.parse(localStorage.getItem(KEY)));
          navigate("/");
        }
      });
  };

  return (
    <div className="Scon">
      <section className="Smain">
        <section className="StitleZone">
          <h3 className="Stitle">로그인</h3>
        </section>
        <div className="Sid id">
          <div className="SidForm idForm">
            <input
              type="text"
              className="SidInput idInput"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="password"
              autoComplete="on"
              className="SpwInput pwInput"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <button className="createBtn" onClick={() => postTest()}>
              <span className="createSpan">로그인</span>
            </button>
          </div>
        </div>
        <Link className="SLink" to={"/join"}>
          <p className="Sif">계정이 없다면?</p>
        </Link>
      </section>
    </div>
  );
};

export default SignInForm;
