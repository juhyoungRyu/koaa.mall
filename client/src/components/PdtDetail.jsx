import React from "react";
import sizeChart from "../imgs/sizeChart.jpg";
import content from "../imgs/content.jpg";
import pdtData from "./Datas";

const PdtDetail = () => {

    return(
        <div className="PdtDetail">
            <div className="PdtDetailCon">
                <div className="pdtImg"></div>
                <div className="pdtContent">
                    <span className="pdtTit">{pdtData[0].name}</span>
                    <span className="price">{pdtData[0].price} KRW</span>
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