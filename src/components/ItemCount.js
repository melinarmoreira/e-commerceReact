import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ dataCounter, cart }) {
  let [counter, setCounter] = useState(0);
  let [stock, setStock] = useState(dataCounter.id);

  function counterUp(e) {
    if (stock >= 1) {
      setCounter(counter + 1);
      setStock(stock - 1);
      cart.push(dataCounter);
    } else {
      alert("No hay stock");
    }
  }

  const counterDown = (e) => {
    if (counter >= 1) {
      setCounter(counter - 1);
      setStock(stock + 1);
      cart.pop(dataCounter);
    } else {
      alert("No hay más items para eliminar");
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
      </div>
    </div>
  );
}

export default ItemCount;
