import React from "react";
import { HeaderContainer } from "./style";
import logo from "../../assets/netflix.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Logo do Aplicativo"
        style={{ width: "150px", height: "auto" }}
      />
    </HeaderContainer>
  );
};

export default Header;
