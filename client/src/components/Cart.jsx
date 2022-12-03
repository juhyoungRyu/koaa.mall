import React from "react";
import "../Compo.css";
import xImg from "../imgs/close.png";
import pdtData from "./Datas";

const Cart = () => {

    return(
        <div className="Cart">
            <section className="C_titlesec">
                <h3 className="C_title">장바구니</h3>
            </section>
            <section className="C_itemCon">
                <div className="C_item">
                    <div className="C_itemImg">
                        <div className="checkbox">
                            <div className="core"></div>
                        </div>
                        <img src="" alt="" className="C_img" />
                    </div>
                    <div className="C_infos">
                        <div className="C_high">
                            <span className="C_pdtname">{pdtData[0].name}</span>
                            <div className="C_xBtn">
                                <img src={xImg} alt="" className="C_x" />
                            </div>
                        </div>
                        <div className="C_mid">
                            <span className="C_size">{pdtData[0].size}</span>
                        </div>
                        <div className="C_low">
                            <div className="C_amountBtnCon">
                                <div className="C_minus">
                                    <button className="C_amountBtn minus">-</button>
                                </div>
                                <input type="number" className="C_amountNum" />
                                <div className="C_plus">
                                    <button className="C_amountBtn plus">+</button>
                                </div>
                            </div>
                            <div className="C_priceCon">
                                <span className="C_price">{pdtData[0].price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="C_itemCon">
                <div className="C_item">
                    <div className="C_itemImg">
                        <div className="checkbox">
                            <div className="core"></div>
                        </div>
                        <img src="" alt="" className="C_img" />
                    </div>
                    <div className="C_infos">
                        <div className="C_high">
                            <span className="C_pdtname">{pdtData[0].name}</span>
                            <div className="C_xBtn">
                                <img src={xImg} alt="" className="C_x" />
                            </div>
                        </div>
                        <div className="C_mid">
                            <span className="C_size">{pdtData[0].size}</span>
                        </div>
                        <div className="C_low">
                            <div className="C_amountBtnCon">
                                <div className="C_minus">
                                    <button className="C_amountBtn minus">-</button>
                                </div>
                                <input type="number" className="C_amountNum" />
                                <div className="C_plus">
                                    <button className="C_amountBtn plus">+</button>
                                </div>
                            </div>
                            <div className="C_priceCon">
                                <span className="C_price">{pdtData[0].price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="C_paySec">
                <div className="C_payBtn">
                    <span className="C_amount">총 1개 | </span>
                    <span className="C_totalPrice"> {pdtData[0].price} 원 결재하기</span>
                </div>
            </section>
        </div>
    );
};

export default Cart;