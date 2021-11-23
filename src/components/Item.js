import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <div className="itemCard">
      <Link to={`/detail/${data.id1}`}>
        <p className="itemPrice">${data.price}</p>
        <img src={data.img} className="imgCard" alt="monstera" />
        <h2 className="itemTitle">{data.title}</h2>
        <button className="buttonDetail">Comprar</button>
      </Link>
    </div>
  );
};

export default Item;
