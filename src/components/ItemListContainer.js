import React from "react";
import "./ItemListContainer.css";



export default function ItemListContainer(props) {
    return (
        <section className="containerItems">
        <h3>
        {props.greeting}
        </h3>
        </section>
    )
}

