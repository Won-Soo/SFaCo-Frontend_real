import React from "react";

function ComEdit() {
    return (
        <div className="wrap">
            <h1>SFaCo</h1>
            <h3><a href="boardlist.html">커뮤니티</a> 수정하기</h3>
        
            <div className="writeArea">
                <h3 className="addTitle">
                    제목 <textarea name="title" rows={1} cols={80} placeholder="제목" maxLength={100} required></textarea>
                </h3>
            </div>

            <div>
                <h3 className="addCate">카테고리</h3>
                <div className="select">
                    <input type="checkbox" checked={false} name="controlled"></input>공항패션
                    <input type="checkbox" checked={false} name="controlled"></input>광고
                    <input type="checkbox" checked={false} name="controlled"></input>드라마
                    <input type="checkbox" checked={false} name="controlled"></input>영화
                    <input type="checkbox" checked={true} name="controlled"></input>기타
                </div>
            </div>

            <div className="addContent">
                <textarea name="content" rows={30} cols={100} placeholder="내용을 입력해주세요." required></textarea>
            </div>

            <div className="writeBtn">
                <button type="submit" className="addBtn">수정</button>
            </div>

        </div>
    );
}

export default ComEdit;