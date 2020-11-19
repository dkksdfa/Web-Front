import React, { useCallback, useEffect, useState } from "react";
import PageWrap from "../PageWrap";
import { authService, firestore, firebase } from "../../firebase";
import {
  StyledInputName,
  StyledName,
  StyledSelect,
  SubmitButton,
  SumbitDiv,
} from "../../styles/StyledMoodify.js";
import { useHistory } from "react-router-dom";
import { StyledTitle } from "../../styles/StyledPageWrap";

export default () => {
  const history = useHistory();
  const [init, setInit] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const getUid = useCallback(async () => {
    const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
    return decodedToken.claims.user_id;
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const uid = await getUid();
      const user = await firestore
        .collection("additional userinfo")
        .doc(uid)
        .get();
      setUserinfo(user.data());
      setInit(true);
    };
    authService.onAuthStateChanged((user) => {
      if (user) {
        getUserData();
      } else {
        alert("please login");
        history.push("/login");
        setInit(true);
      }
    });
  }, [history, getUid]);

  const onClick = async () => {
    const uid = await getUid();
    firestore.collection("additional userinfo").doc(uid).set(userinfo);
    alert("You success to modify.");
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
          <StyledTitle>Modify</StyledTitle>
          <div>
            <StyledInputName>Name</StyledInputName>
            <StyledName name="name" value={userinfo.name} onChange={onChange} />
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
              name="classnumber"
              onChange={onChange}
              value={userinfo.classnumber}
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
