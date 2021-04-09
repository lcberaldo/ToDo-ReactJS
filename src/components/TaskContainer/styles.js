import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 5px;
  position: relative;
  max-width: 100%;
  padding: 50px;
  padding-bottom: 70px;
  margin-bottom: 70px;

  h1 {
    text-align: center;
    font-style: italic;
    color: #5a189a;
  }

  svg {
    font-size: 40px;
  }

  .newTask {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5a189a;
    border-radius: 30px;
    padding: 15px 40px;
    outline: none;
    border: none;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
  }

  @media (max-width: 400px) {
    padding: 10px;
    padding-bottom: 40px;

    svg {
      font-size: 30px;
    }
    h1 {
      font-size: 16px;
    }
    span {
      font-size: 16px !important;
      margin: 0 !important;
      margin-left: 15px !important;
      width: 70%;
    }
  }
`;
