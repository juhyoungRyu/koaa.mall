import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import axios from "axios";
import logoImg from "./imgs/KOAA.jpg";

const App = () => {
  const initialData = { test: {} };
  const [data, setData] = useState(initialData);
  const [sm, setSm] = useState();

  useEffect(() => {
    const SM = document.querySelector(".sideMenu");
    setSm(SM);
  }, []);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
    });
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/data");
    console.log(response.data);
    return response.data;
  };

  const sideMeuToggle = () => {
    const SM = document.querySelector(".sideMenu");
    SM.classList.toggle("open");
  };

  return (
    <div className="App">
      <div className="entire">
        {/* 네비게이션 : Router를 이용해 페이지를 이동할 수 있게 해주는 컴포넌트 */}
        <Navigation smt={sideMeuToggle} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <section className="Main">
                {/* 첫 화면 : 사진 한장씩 슬라이드..*/}
                <div className="imgZone">이미지</div>
              </section>
            }
          />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* 메인화면 : Carousel 들어갈 예정 */}
        {/* 푸터 : 사업자 정보 등이 들어간 컴포넌트 */}
        <Footer />
      </div>
      {/* 사이드메뉴 */}
      <div className="sideMenu">
        <div className="sideNav">
          <img className="sideLogoImg" src={logoImg} alt="-" />
          <div className="SLI">
            <span className="SLIspan">Login</span>
          </div>
          <div className="SJ">
            <span className="SJspan">Join</span>
          </div>
        </div>
        <div className="sideMain">
          <div className="sideList">
            <span className="about list">About</span>
          </div>
          <div className="sideList">
            <span className="lookbook list">Lookbook</span>
          </div>
          <div className="sideList">
            <span className="shop list">Shop</span>
          </div>
          <div className="sideList">
            <span className="cart list">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
