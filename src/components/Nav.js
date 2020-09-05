import React from "react";
import values from "../values.js";
import "../css/Nav.css";

const Nav = ({ main }) => {
  return (
    <nav>
      <img
        id = "logo"
        src="http://daekyeong.sen.hs.kr/dggb/module/file/selectImageView.do?atchFileId=451075&fileSn=0"
        alt="Logo"
      />
      {!main && (
        <ul id = "nav-menu">
          {values.menuList.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
      <div id="btn-position">
        <button number="1">로그인</button>
        <button number="2">회원가입</button>
      </div>
    </nav>
  );
};

export default Nav;
