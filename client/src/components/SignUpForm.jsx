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
    temp[0][key] = e.target.value;
    setJoinData(temp);
  };

  const fetchJoinData = async () => {
    if (
      joinData[0].id === "" ||
      joinData[0].pw === "" ||
      joinData[0].email === "" ||
      joinData[0].name === ""
    ) {
      alert("모든 항목을 작성해주세요!");
      return;
    }
    await axios
      .post("/join", {
        id: joinData[0].id,
        pw: joinData[0].pw,
        email: joinData[0].email,
        name: joinData[0].name,
        join_date: Date.now(),
      })
      .then((res) => console.log(res.data))
      .catch((e) => {
        if (e.response.status === 422) {
          alert("Is not a valied Email form");
        }
      });
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
