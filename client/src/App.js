import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div className="App">
      {/* 네비게이션 컴포넌트 */}
      <Navigation />
      {/* 메인화면 : Carousel 들어갈 예정 */}
      <section className="Main">
        {/* 
        첫 화면
        사진 한장씩 슬라이드..
         */}
        <div className="imgZone">이미지</div>
      </section>
      {/* 사업자 정보 등이 들어갈 컴포넌트 */}
      <Footer />
    </div>
  );
};

export default App;
