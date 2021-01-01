import React, { useCallback, useEffect, useState } from "react";
import PageWrap from "../../common/page-wrap";
import { firestore } from "../../firebase";
import { useHistory } from "react-router-dom";
import {
  StyledPageTitle,
  InputTitle,
  Button,
  ButtonsWrapper,
  StyledSelect,
  Input,
} from "../../common/styles";

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
            <InputTitle>Name</InputTitle>
            <Input
              name="displayName"
              value={userinfo.displayName}
              onChange={onChange}
            />
          </div>
          <div>
            <InputTitle>Years</InputTitle>
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
            <InputTitle>Class</InputTitle>
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
          <ButtonsWrapper>
            <Button
              onClick={onClick}
              marginTop={true}
              backgroundColor={"rgb(149, 0, 255)"}
              hoverColor={"rgb(106, 0, 182)"}
            >
              Modify
            </Button>
          </ButtonsWrapper>
        </>
      ) : (
        <StyledPageTitle>Loading...</StyledPageTitle>
      )}
    </PageWrap>
  );
};

export default Modify;
