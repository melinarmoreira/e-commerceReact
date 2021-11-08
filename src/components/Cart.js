import React, { useContext, useState } from "react";
import { ItemsContext } from "./CartContext";
import CartDetail from "./CartDetail";
// import { Form } from "./Form";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
// import * as firebase from "firebase/app"
// import "firebase/firestore"

const Cart = () => {
  let [carrito] = useContext(ItemsContext);
  let [total, setTotal] = useState(0);
  let [finalizarCompra, SetFinalizarCompra] = useState(false);
  const [idCompra, setIdCompra] = useState("");
  let [ordenCompra, setOrdenCompra] = useState(false);
  // const [productos, setProductos] = useState([])

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
    SetFinalizarCompra(true);
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
      <div>
        <p>No tienes items en tu carrito</p>
        <Link to="/Products">
          <button>Ver productos</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <CartDetail data={carrito}></CartDetail>
        <button onClick={addPrice}>Finalizar</button>
        <p>Total ${total}</p>
        {finalizarCompra ? (
          <div>
            <form onSubmit={registrar}>
              <label for="fname">First name:</label>
              <input
                type="text"
                id="fname"
                name="nombre"
                value={nombre}
                onChange={handleInputChangeName}
              ></input>
              <label for="email">email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChangeEmail}
              ></input>
              <button type="submit" onClick={buttonOrderCompra}>
                Terminar compra
              </button>
              {ordenCompra ? (
                <>
                  <h4> Tu numero de orden es #{idCompra}</h4>
                  <p>
                    Gracias por tu compra {nombre}, te enviaremos tu comprobante
                    al correo {email}{" "}
                  </p>
                </>
              ) : null}
            </form>
          </div>
        ) : null}
      </div>
    );
  }
};

export default Cart;
