import React from "react";
import "../Compo.css";

const Mypage = (props) => {
  return (
    <div className="Mypage">
      <span className="M_title">마이페이지</span>
      <div className="M_upper">
        <div className="M_profileCon">
          <div className="M_profileDiv">
            <div className="profileImg"></div>
          </div>
          <span className="M_id">{props.isLogin.name}</span>
          <div className="M_setting"></div>
        </div>
        <div className="M_buttonCon">
          <div className="M_cart">
            <span className="M_Span">장바구니</span>
          </div>
          <div className="M_question">
            <span className="M_Span">문의사항</span>
          </div>
        </div>
      </div>
      <div className="M_orderHist">
        <span className="M_orderTit">주문내역</span>
        <div className="M_orderCon">
          <div className="pdtForm"></div>
          <div className="pdtForm"></div>
          <div className="more">더보기</div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
