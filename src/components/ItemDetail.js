// import Image from "./assets/monstera.jpg";
import ItemCount from "./ItemCount";
import "./ItemDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const ItemDetail = (dataCounter) => {
  const { id } = useParams();
  const [infoProduct, setInfoProduct] = useState([]);
  const [isFinished, setIsFinished] = useState(true);
  let [productSelected, setProductSelected] = useState([]);
  const [cart] = useState([]);

  useEffect(() => {
    const docs = [];
    const dataReq = async () => {
      const dataFirebase = await getDocs(collection(db, "products"));
      dataFirebase.forEach((element) => {
        docs.push({ ...element.data() });
        setInfoProduct(docs);
        setProductSelected(productSelected = infoProduct.find((x) => (x.id = id)))
      });
    };
    dataReq();

  }, []);

  
  const finish = () => {
    setTimeout(() => setIsFinished(false), 3000);
  };

  return (
    <div className="detailContainer">
      <div key={productSelected.id} data={productSelected}>
        <h2> ID:{productSelected.title}</h2>
        <img src={productSelected.img} alt={productSelected.title}></img>
        <p>{productSelected.description}</p>
        <p> ${productSelected.price} </p>
        <p>{productSelected.stock} unidades disponibles</p>

        <div>
          {isFinished && (
            <ItemCount dataCounter={productSelected} cart={cart} />
          )}
          <Link to="/Cart">
            <button onClick={finish}>Ir al carrito</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
