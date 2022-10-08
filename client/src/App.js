import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const initialData = { test: {} };
  const [data, setData] = useState(initialData);
  useEffect(() => {
    fetchData().then((getData) => setData(getData));
  }, []);

  const fetchData = async () => {
    const response = await fetch("/data");
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      {/* 네비게이션 : Router를 이용해 페이지를 이동할 수 있게 해주는 컴포넌트 */}
      <Navigation />
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
      </Routes>
      {/* 메인화면 : Carousel 들어갈 예정 */}
      {/* 푸터 : 사업자 정보 등이 들어간 컴포넌트 */}
      <Footer />
    </div>
  );
};

export default App;
