import React from "react";
import "../Compo.css";

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
                        <div clasesName="C_high">
                            <span className="C_pdtname">[22FW] NO NEED EDUCATED HOOD</span>
                            <div className="C_xBtn"></div>
                        </div>
                        <div className="C_mid">
                            <span className="C_size">XL</span>
                        </div>
                        <div className="C_low">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;