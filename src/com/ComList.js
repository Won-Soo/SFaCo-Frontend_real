import React from "react";
import App from "../App";
import { Link } from 'react-router-dom';

function ComList() {
    return (
        <div className="wrap">
            <h1>SFaCo</h1>
            <h3>커뮤니티</h3>
            <nav className="menu">
                <ul>
                    <li>전체</li>
                    <li>공항패션</li>
                    <li>영화</li>
                    <li>광고</li>
                    <li>드라마</li>
                    <li>예능</li>
                    <li>기타</li>
                </ul>
            </nav>
            <h3 className="write"><Link to="/communities/list/communities/new">작성하기</Link></h3>
    

            <div className="comTable">
                <table className="table" border={1} cellSpacing={0} ></table>
                <colgroup>
                    <col width={80}></col>
                    <col width={200}></col>
                    <col width={450}></col>
                    <col width={250}></col>
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">카테고리</th>
                        <th scope="col">제목</th>
                        <th scope="col">날짜</th>
                    </tr>
                </thead>
            </div>
        </div>
    )
}

export default ComList;