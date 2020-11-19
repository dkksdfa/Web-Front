import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  /* position: fixed; */
  height: 44px;
  background: black;
  width: 100%;

  @media all and (max-width: 1300px) {
    & * {
      display: none;
    }
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  /* visibility: ${(props) => (props.visible ? "visible" : "hidden")}; */
  background: inherit;
  box-shadow: none;
  overflow: visible;
  margin: 0;
  padding: 0;
  width: 10%;
  height: 100%;
  background: none;
  color: rgb(204, 204, 204);
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
    transition: 0.3s ease;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonPosition = styled.div`
  display: flex;
  justify-content: center;
  /* position: fixed; */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: black;
`;

export { ButtonPosition, Button, Navigation };
