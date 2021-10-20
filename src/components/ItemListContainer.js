import React from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
  return (
    <section className="containerItems">
      <h3>{props.greeting}</h3>
      <ItemList />
    </section>
  );
}
