import React from "react";
import Logo from "../../public/logo.png";

const Header = () => (
  <>
    <header>
      <a href="#">
        <img src={Logo} alt="logo"></img>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Jogos</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default Header;
