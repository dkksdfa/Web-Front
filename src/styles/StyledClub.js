import styled from "styled-components";

const Title = styled.div`
  color: #444;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ClubWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ClubIntro = styled.div`
  width: 220px;
  height: 220px;
  margin: 15px 15px;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 350px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png");
  background-size: cover;
  color: rgb(204, 204, 204);
  &:hover {
    transform: scale(1.2);
    color: white;
    transition: 0.4s;
  }
`;

export { Title, ClubWrap, ClubIntro };
