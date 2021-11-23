import ItemCount from "./ItemCount";
import "./ItemDetails.css";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ItemsContext } from "./CartContext";

const ItemDetail = () => {
  const { id1 } = useParams();
  const [isFinished, setIsFinished] = useState(true);
  const [cart] = useState([]);
  let [filtro, setFiltro] = useState([]);
  const { infoProd } = useContext(ItemsContext);

  useEffect(() => {
    filtro = infoProd.find((x) => x.id1 === Number(id1));
    setFiltro({ ...filtro });
  }, []);

  const finish = () => {
    setTimeout(() => setIsFinished(false), 3000);
  };

  return (
    <div className="detailContainer">
      <div key={filtro.id1} data={filtro} className="flexbox-item-detail">
        <div className="detailDescription">
          <h2>{filtro.title}</h2>
          <p>{filtro.description}</p>
          <div className="cuidados-detail">
            <h3>Cuidados </h3>
            <p>{filtro.cuidados}</p>
          </div>
        </div>
        <div className="detailImage">
          <img className="imgDetail" src={filtro.img} alt={filtro.title}></img>
        </div>
        <div className="detailCount">
          {isFinished && <ItemCount dataCounter={filtro} cart={cart} />}
          <Link to="/Cart">
            <button className="buttonFinish" onClick={finish}>
              Ir al carrito
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
