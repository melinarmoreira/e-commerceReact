import React from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  return (
    <div>
      <div className="seguir-comprando">
      <Link to="/products">
        <p> ← Volver </p>
      </Link>
      </div>
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
