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
