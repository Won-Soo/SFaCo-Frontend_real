import React from "react";
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="wrap">
            <header>
                <h1 className="logo">SFaCo</h1>
                <h3 className="sub">LOGIN</h3>
            </header>
            <h1 clasNames="title">LOGIN</h1>
            <section className="IdPwdMiddle">
                ID | <input type="text" value="" title="ID" size={10} onInput="id()"></input>
                PASSWORD | <input type="password" value="" title="Password" size={10} name="pwd" onInput="pwd()"></input>
                <button class="loginBtn">Login</button>
            </section>
            <section className="IdPwdBottom">
                <ul className="IPB">
                    <li><a href="SignUp.html">회원가입</a></li>
                    <li><a href="FindID.html">아이디 찾기</a></li>
                    <li><a href="FindPwd.html">비밀번호 찾기</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Login;