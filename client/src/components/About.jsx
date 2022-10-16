import React from "react";
import "../Compo.css";

const About = () => {

    return (
        <div className="About">
            <div className="A_topBg">
                <dl className="brandSpan">
                    <dt className="KOAA">KOAA</dt>
                    <dd className="KOAA_detail">KoreanOrientalAndAsian</dd>
                </dl>
            </div>
            <div className="A_main">
                <span className="A_title">Brand Story</span>
                <div className="A_img"></div>
                <div className="ex kor">
                    <p className="A_explain">KOAA는 Korean Oriental And Asian 의 약자이며,</p> 
                    <p className="A_explain">힙합 컬처를 기반으로 전개하는 브랜드입니다. </p>
                    <p className="A_explain">세상의 모든 평범한 요소를 비틀어 표현합니다. </p>  
                </div>
                <div className="ex eng">
                    <p className="A_explain">KOAA stands for Korean Oriental And Asian and </p> 
                    <p className="A_explain">is a brand that develops based on hip-hop culture.</p>
                    <p className="A_explain">We twist and express all the ordinary elements of the world.</p>
                </div>

            </div>
        </div>
    );
};

export default About;