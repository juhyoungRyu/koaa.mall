import React from "react";
import "../Compo.css";
import xImg from "../imgs/close.png";

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
                            <span className="C_pdtname">[22FW] NO NEED EDUCATED HOOD</span>
                            <div className="C_xBtn">
                                <img src={xImg} alt="" className="C_x" />
                            </div>
                        </div>
                        <div className="C_mid">
                            <span className="C_size">XL</span>
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
                                <span className="C_price">30,000 KRW</span>
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
                            <span className="C_pdtname">[22FW] NO NEED EDUCATED HOOD</span>
                            <div className="C_xBtn">
                                <img src={xImg} alt="" className="C_x" />
                            </div>
                        </div>
                        <div className="C_mid">
                            <span className="C_size">XL</span>
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
                                <span className="C_price">30,000 KRW</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;