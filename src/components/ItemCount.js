import { useState, useContext } from "react";
import "./ItemCount.css";
import { ItemsContext } from "./CartContext";

function ItemCount({ dataCounter }) {
  let { carrito, setCarrito, counter, setCounter } = useContext(ItemsContext);
  let [stock, setStock] = useState(dataCounter.stock);
  let [selectedProd, setSelectedProd] = useState({});

  const clearCart = () => {
    setCarrito([]);
    setCounter(0);
  };

  const counterDown = (e) => {
    e.preventDefault();
    if (counter >= 1) {
      setCounter(counter - 1);
      setStock(stock + 1);
      selectedProd = carrito.filter((prod) => (prod.id = e.target.value));
      setSelectedProd(selectedProd);
      var deleteProd = carrito.indexOf(selectedProd);
      carrito.splice(deleteProd, 1);
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
      <p> Items en tu carrito </p>
      <div className="containerButtonsCounter">
        <button className="buttonCounterDown" onClick={counterDown}>
          -
        </button>
        <p className="counterStyle">{counter}</p>
        <button className="buttonCounterUp" onClick={counterUp}>
          +
        </button>
      </div>
      <div>
        <button className="buttonClear" onClick={clearCart}>
          Limpiar carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
