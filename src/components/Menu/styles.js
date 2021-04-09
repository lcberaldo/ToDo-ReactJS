import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 0px;
  height: 300px;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 50;
  background: #5a189a;
  border-radius: 8px 0px 0px 8px;
  overflow: hidden;
  transition: width 0.2s;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  button {
    position: relative;
    right: -300px;
    border: 2px solid #fff;
    outline: none;
    padding: 15px 0;
    border-radius: 30px;
    background: transparent;
    color: #fff;
    font-weight: bold;
    display: none;
    &:hover {
      background: white;
      color: #5a189a;
      transition: all 0.1s;
    }
  }

  ${(props) =>
    props.menuIsOpen &&
    css`
      transition: width 0.2s;
      width: 270px;
      padding-right: 30px;
      padding-left: 40px;
      button {
        display: block;
      }
    `}

  ${(props) =>
    props.animated &&
    css`
      button {
        right: 0px;
        transition: right 0.2s;
      }
    `}
`;
