import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto 0 auto;
  background: #af7eeb;
  padding: 0 30px;
  color: #5a189a;
  margin-bottom: 40px;
  border-radius: 5px;

  .hamburger-react {
    color: #5a189a;
  }

  img {
    height: 50px;
  }

  @media (max-width: 400px) {
    padding: 0 10px;
    h1 {
      font-size: 20px;
    }
  }
`;

export default Container;
