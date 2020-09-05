import React from "react";
import styled from "styled-components";
const Background = styled.div`
  width: 100%;
  height: 1100px;
  justify-content: center;
  background: hotpink;
  text-align: center;
`;

const Button = styled.button`
  background: white;
  border: none;
  border-radius: 10px;
  color: pink;
  font-size: 2.5rem;
  margin-top: 1rem;
  padding: 0.2rem 1rem;
  &:hover {
    background: red;
    color: white;
    transition: 0.5s;
  }
`;
const Text = styled.p((props) => ({
  fontSize: `${props.size}rem`,
  color: "white",
  lineHeight: "1rem",
  fontWeight: "bold",
}));

const MenuTemplate = styled.div`
  width: 1100px;
  height: 400px;
  border-radius: 10px;
  background: white;
  border: none;
  margin: 100px auto 0;
`;

const Rolling = styled.div`
  width: 100%;
  padding: 50px 0;
  background: green;
`;
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const Main = () => {
  return (
    <>
      <Background>
        <Rolling>
          <Text size="5">2020 대경 매봉제</Text>
          <Text size="2">2020. 09. 25</Text>
          <Text size="3">Made By WebFront</Text>
          <Button>제작 과정 보러가기</Button>
        </Rolling>
        <MenuTemplate>{}</MenuTemplate>
      </Background>
    </>
  );
};

export default Main;
