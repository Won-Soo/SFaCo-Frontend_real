import React from "react";

function SignUp() {
    return (
        <div className="wrap">
            <header>
                <h1 className="title">SIGN UP</h1>
            </header>
            <section className="contents">
                <div className="id">
                    아이디 | <input type="text" value="" size={10}  maxLength={15} onInput="id()"></input>
                </div>
                <div className="pwd">
                    비밀번호 |<input type="password" value="" size={10} onInput="pwd()"></input>
                </div>
                <div className="pwdCheck">
                    비밀번호 확인 |<input type="password" value="" size={10} onInput="pwd()"></input>
                </div>
                <div className="nameSub">
                    닉네임 | <input type="text" value="" size={10} onInput="nickName()"></input>
                </div>
                <div className="name">
                    이름 | <input type="text" value="" size={10} onInput="name()"></input>
                </div>
                <div className="birth">
                    생년월일 | <input type="date"></input>
                </div>
                <div className="email">
                    E-mail <input id="emailID" type="text" size={10} maxLength={15} onInput="emailId()"></input>
                    @ <input id="emailCom" type="text" size={10} maxLength={15} onInput="emailCom()"></input>

                </div>
                <div className="authNum">
                    인증번호 | <input type="text" value="" size={10} onInput="auth()"></input>

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

export default SignUp;