import React, { useState } from "react";
import { GlobalStyle, Container } from "./global-styles";

import Header from "./components/Header";
import Menu from "./components/Menu";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  const [menuState, setMenuState] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [tasksIsEmpty, setTasksEmpty] = useState(false);
  const [saveLocal, setSaveLocal] = useState(false);

  function toggleMenu() {
    setMenuState(!menuState);

    setTimeout(() => {
      setAnimation(!animation);
    }, 100);
  }

  return (
    <>
      <GlobalStyle />

      <Container>
        <Header openMenu={toggleMenu} />

        <TaskContainer
          isSaved={saveLocal}
          afterSave={() => setSaveLocal(false)}
          tasksIsEmpty={tasksIsEmpty}
          afterDelete={() => setTasksEmpty(false)}
        />

        <Menu
          menuIsOpen={menuState}
          animationOn={animation}
          onDelete={() => setTasksEmpty(true)}
          onSave={() => setSaveLocal(true)}
        />
      </Container>
    </>
  );
};

export default App;
