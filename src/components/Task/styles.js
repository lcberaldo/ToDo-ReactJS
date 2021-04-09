import styled from 'styled-components'

const Task = styled.div`

  width: 100%;
  border: 2px solid #AF7EEB;
  height: 100px;
  border-radius: 5px;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: relative;

  & + div {
    margin-top: 10px;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    color: #AF7EEB;
    
  }
  
  span {
    margin-left: 70px;
    margin-right: 70px;
    font-weight: bold;
    font-size:32px;
  }

  .delete-btn {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translate(-50%, -50%);
  }

`

export default Task