import React, { useEffect, useState } from "react";
import PageWrap from "../PageWrap";
import { firestore } from "../../firebase";
import {
  StyledInputName,
  StyledName,
  StyledSelect,
  SubmitButton,
  SumbitDiv,
} from "../../styles/StyledMoodify.js";
import { useHistory } from "react-router-dom";
import { StyledTitle } from "../../styles/StyledPageWrap";

const Modify = ({ isLoggedIn, userObj, setUserObj }) => {
  const [init, setInit] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const getUserData = async () => {
    setInit(true);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/login");
    }
    getUserData();
  }, [isLoggedIn]);

  const onClick = async () => {
    await firestore
      .collection("additional userinfo")
      .doc(userObj.uid)
      .set(userObj);
    history.go(0);
  };
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setUserObj((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <PageWrap>
      {init ? (
        <>
          <StyledTitle>Modify</StyledTitle>
          <div>
            <StyledInputName>Name</StyledInputName>
            <StyledName
              name="displayName"
              value={userObj.displayName}
              onChange={onChange}
            />
          </div>
          <div>
            <StyledInputName>Years</StyledInputName>
            <StyledSelect
              name="grade"
              onChange={onChange}
              value={userObj.grade}
            >
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
            </StyledSelect>
          </div>
          <div>
            <StyledInputName>Class</StyledInputName>
            <StyledSelect
              name="classNumber"
              onChange={onChange}
              value={userObj.displayName}
            >
              <option value="1">1반</option>
              <option value="2">2반</option>
              <option value="3">3반</option>
              <option value="4">4반</option>
              <option value="5">5반</option>
              <option value="6">6반</option>
              <option value="7">7반</option>
              <option value="8">8반</option>
            </StyledSelect>
          </div>
          <SumbitDiv>
            <SubmitButton onClick={onClick}>Modify</SubmitButton>
          </SumbitDiv>
        </>
      ) : (
        <StyledTitle>Loading...</StyledTitle>
      )}
    </PageWrap>
  );
};

export default Modify;
