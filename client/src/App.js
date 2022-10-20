import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import About from "./components/About";
import Mypage from "./components/Mypage";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import NotFound from "./components/NotFound";
import axios from "axios";
import logoImg from "./imgs/KOAA LOGO OG (1).png";

const App = () => {
  const KEY = "@loginData";
  const initialData = { test: {} };
  const location = useLocation();
  const [data, setData] = useState(initialData);
  const [loc, setLoc] = useState(location.pathname);
  const [isLogin, setIsLogin] = useState(() => {
    if (typeof window != "undefined") {
      const saved = window.localStorage.getItem(KEY);
      if (saved !== null) {
        return JSON.parse(saved);
      } else {
        return null;
      }
    }
  });

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

  useEffect(() => {
    const v = document.querySelector(".sideMenu").classList.value;

    if (loc !== location.pathname) {
      if (v === "sideMenu open") {
        sideMenuToggle();
      }
      setLoc(location.pathname);
    }
  }, [location.pathname]);

  const sideMenuToggle = () => {
    const SM = document.querySelector(".sideMenu");
    if (SM.classList.value === "sideMenu open") {
      SM.classList.toggle("open");
      return;
    }
    SM.classList.toggle("open");
  };

  return (
    <div className="App">
      <div className="entire">
        {/* 네비게이션 : Router를 이용해 페이지를 이동할 수 있게 해주는 컴포넌트 */}
        <Navigation smt={sideMenuToggle} />
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
          <Route
            path="/login"
            element={<SignInForm setIsLogin={setIsLogin} />}
          />
          <Route path="/join" element={<SignUpForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* 메인화면 : Carousel 들어갈 예정 */}
        {/* 푸터 : 사업자 정보 등이 들어간 컴포넌트 */}
        <Footer />
      </div>
      {/* 사이드메뉴 */}
      <div className="sideMenu">
        <div className="sideNav">
          <Link className="logo" to={"/"}>
            <img className="sideLogoImg" src={logoImg} alt="-" />
          </Link>
          {isLogin === null ? (
            <div className="S_btnCon">
              <div className="SLI">
                <Link to={"/login"}>
                  <span className="SLIspan">Login</span>
                </Link>
              </div>
              <div className="SJ">
                <Link to={"/join"}>
                  <span className="SJspan">Join</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="S_btnCon">
              <p className="S_userName">{isLogin.name}</p>
            </div>
          )}
        </div>
        <div className="sideMain">
          <div className="sideList">
            <Link to={"/about"}>
              <span className="about list">About</span>
            </Link>
          </div>
          <div className="sideList">
            <Link to={"/lookbook"}>
              <span className="lookbook list">Lookbook</span>
            </Link>
          </div>
          <div className="sideList">
            <Link to={"shop"}>
              <span className="shop list">Shop</span>
            </Link>
          </div>
          <div className="sideList">
            <Link to={"cart"}>
              <span className="cart list">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
