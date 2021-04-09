import React from "react";

import { Container } from "./styles";
import { IoSendSharp } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalContainer = ({
  ref,
  isOpened,
  onCloseModal,
  addTask,
  newTaskValue,
  catchTaskValue,
}) => {
  return (
    <Container ref={ref} isOpened={isOpened}>
      <div className="teste">
        <h2>Type your next task:</h2>

        <form onSubmit={addTask}>
          <input
            type="text"
            value={newTaskValue}
            onChange={catchTaskValue}
            name="newTask"
            id=""
          />

          <div className="btn-go">
            <input type="submit" value="" />
            <IoSendSharp size={30} />
          </div>
        </form>

        <button onClick={onCloseModal} className="close">
          <AiOutlineCloseCircle size={30} />
        </button>
      </div>
    </Container>
  );
};

export default ModalContainer;
