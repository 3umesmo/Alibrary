import React from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import user from "../../images/perfil.svg";
import cart from "../../images/sacola.svg";

const textOptions = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTES"];
const iconsOptions = [user, cart];

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul className="opcoes">
        {textOptions.map((text) => (
          <li>
            <p className="opcao">{text}</p>
          </li>
        ))}
      </ul>
      <ul className="opcoes">
        {iconsOptions.map((icon) => (
          <li>
            <p className="opcao">
              <img alt={icon === user ? "perfil" : "Carrinho"} src={icon}></img>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
