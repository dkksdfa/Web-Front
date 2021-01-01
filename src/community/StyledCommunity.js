import styled from "styled-components";

export const Body = styled.div`
  width: 50%;
  margin: 20px auto;
`;

export const Top = styled.div`
  background: #eee;
  height: 60px;
  margin-top: 54px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Write = styled.button`
  width: 120.78px;
  color: white;
  background: #3b49df;
  height: 40px;
  border: none;
  border-radius: 10px;
  transition: 0.3s ease;
  font-weight: 600;
  font-size: 1rem;
  &:hover {
    background: #323ebf;
  }
`;

export const Search = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid black;
  outline: none;
  margin-right: 40px;
  text-indent: 5px;
  font-size: 1rem;
  margin-left: 50px;
  transition: 0.1s ease;
  &:focus {
    border: 1px solid #4150f5;
    box-shadow: 1px 1px 0 #4150f5;
  }
`;
