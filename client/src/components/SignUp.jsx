import React from "react";
import Navigation from "./components/Navigation";
import "../Compo.css";

const SignUpForm = () => {
    return <div className="SUCon">
        <Navigation></Navigation>
        <section className="SUmain">
            <h3 className="SUtit">계정 만들기</h3>
            <div className="SUid id">
                <form action="" className="SUidForm idForm">
                    <input type="text" className="SUidInput idInput" />
                </form>
            </div>
            <div className="SUpw pw">
                <form action="" className="SUpwForm pwForm">
                    <input type="text" className="SUpwInput pwInput" />
                </form>
            </div>
            <button className="createBtn">
                <span className="createSpan">계정 생성</span>
            </button>
            <p className="SUif">계정이 이미 있다면?</p>
            <div className="outline"></div>
            <h3 className="brand">Korean Oriental And Asian</h3>
        </section>
    </div>
}

export default SignUpForm;