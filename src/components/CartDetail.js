import React from "react";
import { useContext, useState } from "react";
import { ItemsContext } from "./CartContext";
import "./CartDetail.css";
import { Link } from "react-router-dom";

const CartDetail = ({ data }) => {
  let { carrito, setCounter, counter } = useContext(ItemsContext);
  let [selectedProd, setSelectedProd] = useState({});

  const deleteItem = (e) => {
    e.preventDefault();
    selectedProd = carrito.find((prod) => (JSON.stringify(prod.id1) === e.target.value));
    setSelectedProd({...selectedProd});
    let deleteProd = carrito.indexOf(selectedProd);
    carrito.splice(deleteProd, 1);
    setCounter(counter - 1);
  };

  return (
    <div className="containerCart">
      <h2 className="tucarrito-title">Tu carrito 🛒</h2>
      <table className="table-cart">
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          {data.map((product) => {
            return (
              <tr key={Math.random()}>
                <td>
                  <img
                    alt={product.title}
                    className="img-carrito"
                    src={product.img}
                  ></img>
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button
                    className="eliminar-producto"
                    value={product.id1}
                    onClick={deleteItem}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/products">
        <button className="seguir-comprando">Seguir comprando</button>
      </Link>
    </div>
  );
};

export default CartDetail;
