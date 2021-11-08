// import Image from "./assets/monstera.jpg";
import ItemCount from "./ItemCount";
import "./ItemDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const ItemDetail = () => {
  const { id1 } = useParams();
  const [infoProduct, setInfoProduct] = useState([]);
  const [isFinished, setIsFinished] = useState(true);
  const [cart] = useState([]);
  // const [productSelected, setProductSelected] = useState([]);
  let [filtro, setFiltro] = useState([]);

  useEffect(() => {
    const docs = [];
    const dataReq = async () => {
      const dataFirebase = await getDocs(collection(db, "products"));
      dataFirebase.forEach((element) => {
        docs.push({ ...element.data() });
      });
      setInfoProduct(docs);
      filtro = infoProduct.find((x) => x.id1 == id1);
      setFiltro({ ...filtro });
    };
    dataReq();
  }, [filtro]);

  const finish = () => {
    setTimeout(() => setIsFinished(false), 3000);
  };

  return (
    <div className="detailContainer">
      <div key={filtro.id1} data={filtro}>
        <h2> ID:{filtro.title}</h2>
        <img src={filtro.img} alt={filtro.title}></img>
        <p>{filtro.description}</p>
        <p> ${filtro.price} </p>
        <p>{filtro.stock} unidades disponibles</p>

        <div>
          {isFinished && <ItemCount dataCounter={filtro} cart={cart} />}
          <Link to="/Cart">
            <button onClick={finish}>Ir al carrito</button>
          </Link>
        </div>
      </div>
      {/* )
       )
       }) */}
    </div>
  );
};

export default ItemDetail;
