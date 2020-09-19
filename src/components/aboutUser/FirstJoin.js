import React, { useState, useCallback } from "react";
import { firestore } from "../../firebase";
import JoinForm from "./JoinForm";
import { LoginInfo } from "..";

const FirstJoin = ({ credential, handleChange, setStatus }) => {
  const [users, setUsers] = useState([]);

  const fetchData = useCallback(() => {
    setUsers([]);
    firestore
      .collection("user")
      .doc("in the end")
      .get()
      .then((doc) => {
        const userList = doc.data().user;
        userList.map((user) => {
          setUsers((previous) => previous.concat(user));
        });
      })
      .catch((error) => {
        throw error;
      });
    users.forEach((user) => {
      if (user.email === credential.email) {
        return false;
      }
    });
    return true;
  }, [credential]);

  const handleClick = () => {
    // if (check) {
    //   if (fetchData()) {
    //     setStatus("half");
    //   } else {
    //     alert("Email already exist. Please try again.");
    //   }
    // }
    // {
    //   console.log("failed");
    // }
  };
  return (
    // <Form>
    //   <Input
    //     autoComplete="off"
    //     placeholder="Email"
    //     onChange={handleChange}
    //     name="email"
    //     type="email"
    //   />
    //   <Input
    //     autoComplete="off"
    //     placeholder="Password"
    //     type="password"
    //     onChange={handleChange}
    //     name="password"
    //   />
    //   <Input
    //     autoComplete="off"
    //     placeholder="Confirm password"
    //     type="password"
    //     onChange={handleChange}
    //     name="confirmedPassword"
    //   />
    //   <SubmitButton onClick={handleClick} style={{ marginBottom: "100px" }}>
    //     Continue
    //   </SubmitButton>
    // </Form>
    <div style={{ margin: "0 auto" }}>
      <JoinForm credential={credential} handleChange={handleChange} />
    </div>
  );
};
export default FirstJoin;
