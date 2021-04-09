import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 50;
  display: block;
  height: 0;
  width: 90%;
  margin: 0 auto;
  bottom: 0px;
  background: #5a189a;
  border-radius: 10px 10px 0px 0px;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
  transition: all 0.4s;

  .teste {
    display: none;
  }

  ${(props) =>
    props.isOpened &&
    css`
      .teste {
        display: block;
      }

      padding-top: 40px;
      padding-bottom: 40px;
      height: 220px;
      transition: all 0.4s;

      @media (max-width: 400px) {
        height: 180px;
      }
    `}

  h2 {
    font-weight: 600;
    color: white;
    padding-bottom: 50px;
    width: 80%;
    @media (max-width: 400px) {
      font-size: 16px !important;
      padding-bottom: 20px;
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn-go {
      position: relative;

      input[type="submit"] {
        background: transparent;
        border: none;
        outline: none;
        z-index: 10;
        position: relative;
        right: -5px;
        width: 50px;
        height: 50px;
        cursor: pointer;
      }

      svg {
        position: absolute;
        right: 0px;
        bottom: 10px;
        color: white;
      }
    }

    input[type="text"] {
      height: 50px;
      border-radius: 5px;
      border: none;
      outline: none;
      width: 90%;
      padding: 0 20px;
    }
  }

  .close {
    border: none;
    outline: none;
    background: transparent;
    color: white;
    position: absolute;
    right: 40px;
    top: 20px;
    @media (max-width: 400px) {
      top: 35px;
    }
  }
`;
