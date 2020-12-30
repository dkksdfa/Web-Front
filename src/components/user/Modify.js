import React, { useCallback, useEffect, useState } from "react";
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
import { StyledPageTitle } from "../../common/styles";

const Modify = ({ isLoggedIn, userObj }) => {
  const [init, setInit] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const getUserData = useCallback(async () => {
    if (!isLoggedIn) {
      history.push("/login");
    } else {
      const dbUserinfo = await firestore
        .collection("additional userinfo")
        .doc(userObj.uid)
        .get();
      setUserinfo(dbUserinfo.data());
      setInit(true);
    }
  }, [userObj, isLoggedIn, history]);
  useEffect(() => {
    getUserData();
    return () => {
      if (!isLoggedIn) {
        history.push("/login");
      }
    };
  }, [isLoggedIn, history, getUserData]);

  const onClick = async () => {
    await firestore
      .collection("additional userinfo")
      .doc(userObj.uid)
      .set(userinfo);
    history.go(0);
  };
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setUserinfo((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <PageWrap>
      {init ? (
        <>
          <StyledPageTitle>Modify</StyledPageTitle>
          <div>
            <StyledInputName>Name</StyledInputName>
            <StyledName
              name="displayName"
              value={userinfo.displayName}
              onChange={onChange}
            />
          </div>
          <div>
            <StyledInputName>Years</StyledInputName>
            <StyledSelect
              name="grade"
              onChange={onChange}
              value={userinfo.grade}
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
              value={userinfo.classNumber}
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
        <StyledPageTitle>Loading...</StyledPageTitle>
      )}
    </PageWrap>
  );
};

export default Modify;
