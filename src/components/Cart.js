import React, { useContext, useState } from "react";
import { ItemsContext } from "./CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";

const Cart = () => {
  let [carrito] = useContext(ItemsContext);
  let [total, setTotal] = useState(0);

  const addPrice = (e) => {
    e.preventDefault();
    carrito.forEach((element) => {
      setTotal((total = total + parseInt(element.price)));
    });
  };

  if (carrito.length === 0) {
    return (
      <div>
        <p>No tienes items en tu carrito</p>
        <Link to="/Products">
          <button>Ver productos</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <CartDetail data={carrito}></CartDetail>
        <button onClick={addPrice}>Finalizar</button>
        <p>Total ${total}</p>
      </div>
    );
  }
};

export default Cart;
