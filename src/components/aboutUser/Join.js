import React, { useState } from "react";
import { Title, TitleWrap, Back, TitleBlur } from "../../styles/StyledJoin";
import FirstJoin from "./FirstJoin";
import SecondJoin from "./SecondJoin";

const Join = () => {
  const [credential, setCredential] = React.useState({
    name: "",
    grade: "",
    class: "",
    number: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("nothing");
  const handleChange = React.useCallback(
    (e) => {
      setCredential({ ...credential, [e.target.name]: e.target.value });
    },
    [credential]
  );

  // const GoogleLogin = (e) => {
  //   e.preventDefault();
  //   const provider = firebase.auto().GoogleAuthProvider();
  //   // provider.addScope;
  // };

  return (
    <Back>
      <TitleWrap>
        <TitleBlur>
          <Title>Create Your dkdk3 ID</Title>
        </TitleBlur>
      </TitleWrap>
      {status === "nothing" ? (
        <FirstJoin
          handleChange={handleChange}
          credential={credential}
          setStatus={setStatus}
        />
      ) : (
        <SecondJoin handleChange={handleChange} />
      )}
    </Back>
  );
};

export default Join;
