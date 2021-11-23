import React, { useContext, useState } from "react";
import { ItemsContext } from "./CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import "./Cart.css";

const Cart = () => {
  let { carrito } = useContext(ItemsContext);
  let [total, setTotal] = useState(0);
  let [finalizarCompra, SetFinalizarCompra] = useState(false);
  const [idCompra, setIdCompra] = useState("");
  let [ordenCompra, setOrdenCompra] = useState(false);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChangeName = (event) => {
    event.preventDefault();
    setNombre((event.target.nombre = event.target.value));
  };

  const handleInputChangeEmail = (event) => {
    setEmail((event.target.email = event.target.value));
  };

  const addPrice = (e) => {
    SetFinalizarCompra(!finalizarCompra);
    e.preventDefault();
    carrito.forEach((element) => {
      setTotal((total = total + parseInt(element.price)));
    });
  };

  const buttonOrderCompra = () => {
    setOrdenCompra(true);
  };
  const registrar = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "compras"), {
      nombre: nombre,
      email: email,
      compra: carrito,
      total: total,
    });
    console.log("compra generada", docRef.id);
    setIdCompra(docRef.id);
  };

  if (carrito.length === 0) {
    return (
      <div className="no-items">
        <p>No tienes items en tu carrito ☹ </p>
        <Link to="/Products">
          <button className="ver-productos">Ver productos</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container-cart-detail">
        {finalizarCompra ? null : (
          <div>
            <CartDetail data={carrito}></CartDetail>
            <button className="finalizar-compra" onClick={addPrice}>
              Finalizar
            </button>
          </div>
        )}
        {finalizarCompra ? (
          <div
            className={finalizarCompra ? "visible" : "hidden"}
          >
            <form className="form" onSubmit={registrar}>
              <h3> Tus datos </h3>
              <div>
                <label htmlFor="fname"></label>
                <input
                  placeholder="Nombre"
                  type="text"
                  id="fname"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChangeName}
                ></input>
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  placeholder="Email"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChangeEmail}
                ></input>
              </div>
              <div>
                <button
                  type="submit"
                  className="button-submit"
                  onClick={buttonOrderCompra}
                >
                  Terminar compra
                </button>
              </div>
              {ordenCompra ? (
                <>
                  <p> Tu código es #{idCompra}</p>
                  <p>
                    Gracias por tu compra {nombre}, te enviaremos tu comprobante
                    al correo {email}
                  </p>
                </>
              ) : null}
            </form>
            <Link to="/products">
              <button className="volver-inicio">Volver al inicio</button>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Cart;
