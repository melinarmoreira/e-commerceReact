import { useState, useContext } from "react";
import "./ItemCount.css";
import { ItemsContext } from "./CartContext";



function ItemCount({dataCounter}) {
  const {carrito, clear, counter, setCounter, setCarrito} = useContext(ItemsContext);
  console.log(carrito);
  let [stock, setStock] = useState(dataCounter.id);

  function counterUp(e) {
    if (stock >= 1) {
      setCounter(prevCount => prevCount + 1);
      setStock(stock - 1);
      carrito.push(dataCounter)
      setCarrito(carrito => carrito)
      console.log(carrito)
    } else {
      alert("No hay stock");
    }
  }

  const counterDown = (e) => {
    if (counter >= 1) {
      setCounter(counter - 1);
      setStock(stock + 1);
      // cart.pop(dataCounter);
      carrito.pop(dataCounter);
      console.log(carrito)
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
        <button className="buttonClear" onClick={clear}>Clear cart</button>
      </div>
    </div>
  );
}

export default ItemCount;
