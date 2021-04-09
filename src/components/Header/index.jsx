import React, { useState } from "react";

import Container from "./styles";
import Hamburger from "hamburger-react";
import reactLogo from "../../assets/react-logo.png";

const Header = ({ menuIsOpen, openMenu }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Hamburger
        size={30}
        toggled={isMenuOpen}
        toggle={setMenuOpen}
        onToggle={openMenu}
      />

      <h1>ReactJS - ToDoList </h1>

      <img src={reactLogo} alt="ReactJs" />
    </Container>
  );
};

export default Header;
