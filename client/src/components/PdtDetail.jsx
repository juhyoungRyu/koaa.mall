import React from "react";
import sizeChart from "../imgs/sizeChart.jpg";
import content from "../imgs/content.jpg";

const PdtDetail = () => {

    return(
        <div className="PdtDetail">
            <div className="PdtDetailCon">
                <div className="pdtImg"></div>
                <div className="pdtContent">
                    <span className="pdtTit">[22FW] NO NEED EDUCATED HOOD</span>
                    <span className="price">30,000 KRW</span>
                    <select name="sizes" id="" className="selectSize">
                        <option value="">사이즈 선택</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <div className="pdtBtnCon">
                        <button className="addCart pdtBtn">
                            <span>장바구니에 추가</span>
                        </button>
                        <button className="buy pdtBtn">
                            <span>구매하기</span>
                        </button>
                    </div>
                </div>
                <div className="pdtInfo">
                    <div className="pdtImgDetail"></div>
                    <img src={sizeChart} alt="" />
                    <img src={content} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PdtDetail;