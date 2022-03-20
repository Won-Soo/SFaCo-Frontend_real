import React from "react";

function FindId() {
    return (
        <div className="wrap">
            <header>
                <h1 className="logo">SFaCo</h1>
                <h3 className="sub">아이디찾기</h3>
            </header>

            <section className="contents">
                <h1 className="title">ID 찾기</h1>
                이름 <input type="text" value="" size={10} onInput="name()"></input>
                <div className="email">
                    E-mail <input id="emailID" type="text" size={10} maxLength={15} onInput="emailId()"></input>
                    @ <input id="emailCom" type="text" size={10} maxLength={15} onInput="emailCom()"></input>
                    <div className="authNum">
                        인증번호 | <input type="text" value="" size={10} onInput="auth()"></input>
                    </div>

                </div>
                <div className="button">
                    <button className="authBtn">
                        인증
                    </button>
                </div>
            </section>
        </div>
    );
}

export default FindId;