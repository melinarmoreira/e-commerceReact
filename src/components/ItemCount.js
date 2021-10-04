import React from "react";
import { useState } from "react";
import "./ItemCount.css"


const ItemCount = () => {
    let [counter, setCounter] = useState(0);
    let [stock, setStock] = useState(10);

    const counterUp = () => {
            if (stock >= 1 ){
            setCounter(counter + 1);
            setStock(stock - 1);
            }
            else {
                alert("No hay stock")
            }
    }
    const counterDown = () => {
            if (stock < 10) {
            setCounter(counter - 1);
            setStock(stock + 1);
            } else {
                alert("No hay más items para eliminar");
            }
    }
    return (
        <div className="containerCounter">
                <h2>Mi contador</h2>
                <p className="counterStyle">{counter}</p>
                <div>
                <button className="buttonCounterUp" onClick={counterUp}>Add</button>
                <button className="buttonCounterDown"onClick={counterDown}>Remove</button>
                </div>
        </div>
    )
}



export default ItemCount;


