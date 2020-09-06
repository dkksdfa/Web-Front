import React from "react";
import values from "../values.js";
import styled from "styled-components";
import "../css/Nav.css";
const Justify = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  top: 0;
  background: red;
  position: fixed;
`;
const JustifiedUl = styled.ul`
  display: flex;
  list-style-type: none;
  vertical-align: middle;
`;
const Li = styled.li`
  margin-left: 50px;
  color: white;
  background: none;
`;
const Button = styled.button((props) => ({
  background: "white",
  borderRadius: "20px",
  border: "none",
  width: "100px",
  height: "30px",
  //   position: "relative",
  //   right: `${props.number * 100}`,
}));

const Nav = ({ main }) => {
  return (
    <nav>
      <img
        id="logo"
        src="http://daekyeong.sen.hs.kr/dggb/module/file/selectImageView.do?atchFileId=451075&fileSn=0"
        alt="Logo"
      />
      {!main && (
        <ul id="nav-menu">
          {values.menuList.map((value, index) => (
            <li key={index}>{value.name}</li>
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
