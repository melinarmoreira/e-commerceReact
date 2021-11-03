import React, {useContext} from "react";
import './CartWidget.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { ItemsContext } from "./CartContext";



function CartWidget () {
    const {carrito} = useContext(ItemsContext);
    return (
        <div className="containerIcon">
            <FontAwesomeIcon className="iconCart" icon={faShoppingCart}/>
            <p className="count">{[carrito.length]}</p>
        </div>
    )
}

export default CartWidget;
