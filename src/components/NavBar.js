import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "./CartContext";

const NavBar = () => {
  const [carrito] = useContext(ItemsContext);

  return (
    <nav className="navStyle">
      <Link to="/Home">
        <h1 className="brand">Mi e-commerce</h1>
      </Link>
      <div>
        <ul>
          <Link to="/Home" className="linkNav">
            Home
          </Link>
          <Link to="/Products" className="linkNav">
            Products
          </Link>
          <Link to="/Cart" className="linkNav">
            Cart
          </Link>
          <li className="linkNav" id="searchNav">
            <input type="search" placeholder="search"></input>
            <button className="buttonSearch">Search</button>
          </li>
          {carrito.length !== 0 ? <CartWidget /> : null}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
