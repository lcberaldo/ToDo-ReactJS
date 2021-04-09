import React from "react";

import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { MdDeleteSweep } from "react-icons/md";
import Container from "./styles";

const Task = ({ taskText, removeTask, checked, onCheck, ref }) => {
  return (
    <Container ref={ref}>
      <button onClick={onCheck}>
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </button>

      <span>{taskText}</span>

      <button onClick={removeTask} className="delete-btn">
        <MdDeleteSweep />
      </button>
    </Container>
  );
};

export default Task;
