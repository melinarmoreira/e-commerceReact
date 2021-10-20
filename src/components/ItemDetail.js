import Image from "./assets/monstera.jpg";
import ItemCount from "./ItemCount";
import "./ItemDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  console.log(id);

  // let productsID = match.params.id;
  const [infoProduct, setInfoProduct] = useState([]);
  const [isFinished, setIsFinished] = useState(true);
  const [cart] = useState([]);

  useEffect(() => {
    const users = new Promise((resolve) => {
      resolve(true);
    });
    users.then(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data1) => setInfoProduct(data1));
    });
  }, [id]);

  const finish = () => {
    setTimeout(() => setIsFinished(false), 3000);
    console.log(cart);
  };

  return (
    <div className="detailContainer">
      <div key={infoProduct.id} data={infoProduct}>
        <h2> ID: {infoProduct.id}</h2>
        <img src={Image} alt="img monstera"></img>
        <p>{infoProduct.username}</p>
        <p> $2500 </p>
        <p>{infoProduct.id} unidades disponibles</p>

        <div>
            {isFinished && <ItemCount dataCounter={infoProduct} cart={cart} />}
              <Link to="/Cart">
                <button onClick={finish}>Finalizar compra</button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
