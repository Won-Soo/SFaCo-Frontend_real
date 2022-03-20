import React from "react";

function MainPage() {
    return (
        <div className="wrap">
            <header className="logo"><h1>SFaCo</h1>
                <nav>
                    <ul className="menu1">
                        <li>전체</li>
                        <li>커뮤니티</li>
                    </ul>
                </nav>
            </header>

            <section className="menu2">
                <ul>
                    <li>공항패션</li>
                    <li>광고</li>
                    <li>영화</li>
                    <li>드라마</li>
                    <li>예능</li>
                    <li>기타</li>
                </ul>
            </section>

            <section className="search">
                검색창 <textarea name="content" rows={1} cols={30} placeholder="검색어를 입력해주세요." required></textarea>
            </section>

            <footer>
                <ul className="menu3">
                    <li><a href="Login.html">로그인</a></li>
                    <li><a href="MyPage.html">마이페이지</a></li>
                </ul>
                <p>
                    책임자 : 원동연, 한수현 | 서비스문의 : e-mail@naver.com
                </p>
            </footer>
        </div>
    );
}


export default MainPage;