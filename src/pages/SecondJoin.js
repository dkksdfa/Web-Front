import React from "react";
import {
  Title,
  Input,
  SubmitButton,
  Form,
  TitleWrap,
  Back,
  TitleBlur,
} from "../styles/StyledJoin";

const SecondJoin = ({ handleChange }) => {
  return (
    <Form>
      <Input
        autoComplete="off"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <Input
        autoComplete="off"
        placeholder="Grade"
        onChange={handleChange}
        name="grade"
      />
      <Input
        autoComplete="off"
        placeholder="Class"
        onChange={handleChange}
        name="class"
      />
      <Input
        autoComplete="off"
        placeholder="Number"
        onChange={handleChange}
        name="number"
      />
      <SubmitButton /*onClick={handleClick}*/ style={{ marginBottom: "100px" }}>
        Join
      </SubmitButton>
    </Form>
  );
};

export default SecondJoin;
