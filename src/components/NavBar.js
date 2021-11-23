import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "./CartContext";
import logo from "./assets/react-js-gif.gif";

const NavBar = () => {
  const { carrito } = useContext(ItemsContext);

  return (
    <nav className="navStyle">
      <Link to="/Home">
        <img className="brand" src={logo} alt="logo"></img>
      </Link>
      <div>
        <ul>
          <Link to="/Home" className="linkNav">
            Home
          </Link>
          <Link to="/Products" className="linkNav">
            Productos
          </Link>
          <Link to="/Cart" className="linkNav">
            Carrito
          </Link>
          <li className="linkNav" id="searchNav">
            <input type="Buscar" placeholder="Buscar"></input>
            <button className="buttonSearch">Buscar</button>
          </li>
          {carrito.length !== 0 ? <CartWidget /> : null}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
