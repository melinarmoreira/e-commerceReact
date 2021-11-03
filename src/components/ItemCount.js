import { useState, useContext } from "react";
import "./ItemCount.css";
import { ItemsContext } from "./CartContext";
// import Cart from "./Cart";

function ItemCount({ dataCounter }) {
  let [carrito, setCarrito, counter, setCounter] = useContext(ItemsContext);
  let [stock, setStock] = useState(dataCounter.stock);

  const clearCart = () => {
    setCarrito([]);
    setCounter(0);
    console.log(carrito);
  };

  const counterDown = (e) => {
    e.preventDefault();
    if (counter >= 1) {
      setCounter(counter - 1);
      setStock(stock + 1);
      // carrito.pop(dataCounter);
    } else {
      alert("No hay más items para eliminar");
    }
  };

  const counterUp = (e) => {
    e.preventDefault();
    if (stock > 0) {
      setCounter(counter + 1);
      setStock(stock - 1);
      carrito.push(dataCounter);
    } else {
      alert("No hay stock");
    }
  };

  return (
    <div className="containerCounter">
      <p>Añadir item al carrito</p>
      <p className="counterStyle">{counter}</p>
      <div>
        <button className="buttonCounterUp" onClick={counterUp}>
          Add
        </button>
        <button className="buttonCounterDown" onClick={counterDown}>
          Remove
        </button>
        <button className="buttonClear" onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
