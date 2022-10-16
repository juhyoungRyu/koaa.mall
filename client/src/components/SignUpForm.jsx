import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Compo.css";

const SignUpForm = () => {
  const [joinData, setJoinData] = useState([
    {
      id: "",
      pw: "",
      email: "",
      name: "",
    },
  ]);

  const changeData = (e, key) => {
    let temp = [...joinData];
    temp[key] = e.target.value;
    setJoinData(temp);
  };

  const fetchJoinData = async () => {
    await axios
      .post("/join", {
        // id: joinData.id,
        // pw: joinData.pw,
        // email: joinData.email,
        // name: joinData.name,
        // join_data: JSON.stringify(Date.now()),
        data: joinData,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div className="Scon">
      <section className="Smain">
        <section className="StitleZone">
          <h3 className="Stitle">계정 만들기</h3>
        </section>
        <input
          type="text"
          placeholder="id"
          className="SidInput idInput"
          onChange={(e) => changeData(e, "id")}
        />
        <input
          type="text"
          placeholder="password"
          className="SpwInput pwInput"
          onChange={(e) => changeData(e, "pw")}
        />
        <input
          type="text"
          placeholder="email"
          className="SemailInput"
          onChange={(e) => changeData(e, "email")}
        />
        <input
          type="text"
          placeholder="name"
          className="SnameInput"
          onChange={(e) => changeData(e, "name")}
        />
        <button className="createBtn" onClick={() => fetchJoinData()}>
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
