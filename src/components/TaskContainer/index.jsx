import React, { useState, useEffect } from "react";
import { v4 } from "uuid";

import { Container } from "./styles";
import ModalContainer from "../ModalContainer";
import Task from "../Task";

const TaskContainer = ({ tasksIsEmpty, afterDelete, isSaved, afterSave }) => {
  const [modalState, setModalState] = useState(false);

  const storageItems = localStorage.getItem("ReactJS-ToDoList");

  const storagedTasks = !storageItems ? [] : JSON.parse(storageItems);

  const [tasks, setNewTask] = useState(storagedTasks);

  const [taskValue, setTaskValue] = useState({
    id: "",
    checked: Boolean,
    taskText: "",
  });

  useEffect(() => {
    if (tasksIsEmpty) {
      setNewTask([]);
      afterDelete();
    }
  }, [tasksIsEmpty, afterDelete]);

  useEffect(() => {
    if (isSaved) {
      localStorage.setItem("ReactJS-ToDoList", JSON.stringify(tasks));
      afterSave();
    }
  }, [isSaved, tasks, afterSave]);

  const catchTaskValue = (e) =>
    setTaskValue({ id: v4(), checked: false, taskText: e.target.value });

  function toggleCheck(taskIndex) {
    let checkedTask = tasks.map((task, index) => {
      if (index === taskIndex) {
        task.checked = !task.checked;
      }
      return task;
    });

    setNewTask(checkedTask);
  }

  function addTask(e) {
    setNewTask([...tasks, taskValue]);
    setTaskValue({ taskText: "" });
    e.preventDefault();
  }

  function toggleModalState() {
    setModalState(!modalState);
  }

  function removeTask(deletedTask) {
    let finalTasks = tasks.filter((task) => task !== deletedTask);

    setNewTask(finalTasks);
  }

  return (
    <>
      <Container>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={task.id}
              taskText={task.taskText}
              checked={task.checked}
              onCheck={() => toggleCheck(index)}
              removeTask={() => removeTask(task)}
            />
          ))
        ) : (
          <h1>You don't have any tasks yet, please add one.</h1>
        )}

        <button className="newTask" onClick={toggleModalState}>
          + New Task
        </button>
      </Container>

      <ModalContainer
        isOpened={modalState}
        addTask={addTask}
        newTaskValue={taskValue.taskText}
        catchTaskValue={catchTaskValue}
        onCloseModal={toggleModalState}
      />
    </>
  );
};

export default TaskContainer;
