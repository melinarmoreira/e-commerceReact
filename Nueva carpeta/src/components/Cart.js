import React, { useContext } from "react";
import { ItemsContext } from "./CartContext";

const Cart = () => {
  const {carrito} = useContext(ItemsContext);
  console.log(carrito);

  return (
    <div className="containerCart">
      <h2>Productos del carrito:</h2>
      {carrito.map((product) => {
        return (
          <div key={product.id}>
            <li>ID: {product.id}  Product: {product.name}  Price: ${product.id}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
