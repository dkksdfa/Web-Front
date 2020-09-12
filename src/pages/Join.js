import React from "react";
// import PageWrap from "./PageWrap";
import {
  Title,
  Input,
  SubmitButton,
  Form,
  TitleWrap,
  Back,
  TitleBlur,
  Description,
} from "../styles/StyledJoin";
const Join = () => {
  const onClickHandler = (e) => {
    // 해당 이벤트에 미리 구현되어 있는 동작이 발생하지 않도록 함
    e.preventDefault();
    // task의 값이 빈 문자열이 아닌 경우 실행
    if (task !== "") {
      firestore
        .collection("user")
        .add({ todo: task }) // todo 필드에 task 값 입력
        .then((res) => {
          // 추가된 데이터와 관련된 정보가 전달됨
          /*
          tasks 스테이트의 각 요소는 todo, id를 필드로 갖는 객체이기 때문에
          todo 필드에는 task를, id에는 추가된 데이터의 id인 res.id를 대입해서
          기존 tasks 스테이트에 추가
          */
          setTasks((prevTasks) => tasks.concat({ todo: task, id: res.id }));
        });
      // input 값을 빈 문자열로 되돌림
      setTask("");
    }
  };
  return (
    <Back>
      <TitleWrap>
        <TitleBlur>
          <Title>Create Your {"<This Web's name>"} ID</Title>
        </TitleBlur>
      </TitleWrap>
      <Form>
        <Input placeholder="Name" />
        <Description>Put your real name here</Description>
        <Input placeholder="School number" />
        <SubmitButton style={{ marginTop: "0" }}>Prove</SubmitButton>
        <hr style={{ margin: "50px auto" }} />
        <Input placeholder="name@example.com" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm password" type="password" />
        <Input placeholder="Nickname" />
        <SubmitButton style={{ marginBottom: "100px" }}>Continue</SubmitButton>
      </Form>
    </Back>
  );
};

export default Join;
