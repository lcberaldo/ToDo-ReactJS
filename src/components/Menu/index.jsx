import React from "react";

import { Container } from "./styles";

const Menu = ({ menuIsOpen, animationOn, onDelete, onSave }) => {
  return (
    <Container menuIsOpen={menuIsOpen} animated={animationOn}>
      <button onClick={onDelete}>Erase All</button>
      <button onClick={onSave}>Save at Local Storage</button>
    </Container>
  );
};

export default Menu;
