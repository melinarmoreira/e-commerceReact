import React from "react";
import { useContext, useState } from "react";
import { ItemsContext } from "./CartContext";

const CartDetail = ({ data }) => {
  let [carrito] = useContext(ItemsContext);

  let [selectedProd, setSelectedProd] = useState({});

  const deleteItem = (e) => {
    selectedProd = carrito.filter((prod) => (prod.id = e.target.value));
    setSelectedProd(selectedProd);
    var deleteProd = carrito.indexOf(selectedProd);
    carrito.splice(deleteProd, 1);
  };

  return (
    <div className="containerCart">
      <h2>Productos del carrito:</h2>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          {data.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button value={product.id} onClick={deleteItem}>
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartDetail;
