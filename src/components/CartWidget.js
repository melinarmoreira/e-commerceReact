import React from "react";
import './CartWidget.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";



function CartWidget () {
    return (
        <div class="containerIcon">
            <FontAwesomeIcon className="iconCart" icon={faShoppingCart}/>
            <p className="count">0</p>
        </div>
    )
}

export default CartWidget;
