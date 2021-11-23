import React, { useContext } from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ItemsContext } from "./CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { carrito } = useContext(ItemsContext);
  return (
    <div className="containerIcon">
      <Link to="/Cart/">
        <FontAwesomeIcon className="iconCart" icon={faShoppingCart} />
      </Link>
      <p className="count">{carrito.length}</p>
    </div>
  );
}

export default CartWidget;
