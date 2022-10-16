import React from "react";
import "../Compo.css";

const Mypage = () => {
    
    return(
        <div className="Mypage">
            <span className="M_title">마이페이지</span>
            <div className="M_upper">
                <div className="M_profileCon">
                    <div className="M_profileDiv">
                        <div className="profileImg"></div>
                    </div>
                    <span className="M_id">trickstar_go</span>
                    <div className="M_setting"></div>
                </div>
                <div className="M_buttonCon">
                    <div className="M_cart">장바구니</div>
                    <div className="M_question">문의사항</div>
                </div>
            </div>
            
        </div>
    );
};

export default Mypage;