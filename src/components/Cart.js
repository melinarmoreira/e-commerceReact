import React, { useContext, useState } from "react";
import { ItemsContext } from "./CartContext";
import CartDetail from "./CartDetail";
// import { Form } from "./Form";
import { Link } from "react-router-dom";
import {addDoc, collection} from 'firebase/firestore';
import { db } from "./firebase";
import * as firebase from "firebase/app"
import "firebase/firestore"

const Cart = () => {
  let [carrito] = useContext(ItemsContext);
  let [total, setTotal] = useState(0);
  let [finalizarCompra, SetFinalizarCompra] = useState(false);
  const [productos, setProductos] = useState([])

  // const [datos, setDatos] = useState(
  //   nombre: "",
  //   email: "",
  // });

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('')
  
const handleInputChangeName = (event) => {
  //  setDatos({
    event.preventDefault()
  //      ...datos,
  //      [event.target.nombre] : event.target.value,
  //      [event.target.email] : event.target.value,
  //  })
  setNombre(event.target.nombre = event.target.value)
 
  }

  const handleInputChangeEmail = (event) => {
  setEmail(event.target.email = event.target.value)
  }
  // const enviar = (e) => {
  //     e.prevent.default();
     
  // }
  const addPrice = (e) => {
    SetFinalizarCompra(true);
    e.preventDefault();
    carrito.forEach((element) => {
      setTotal((total = total + parseInt(element.price)));
    });
  };


  const registrar = async (e) => {
    e.preventDefault()
     const docRef = await addDoc(collection(db, "compras"), {
        nombre: nombre,
        email: email,
        compra: carrito,
   })
   console.log("written with id", docRef.id)
  }


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
        {/* <button onClick={registrar}>RegistrarCompra</button> */}
        {finalizarCompra ? 
                <div> 
                  <form onSubmit={registrar}>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="nombre" value={nombre} onChange={handleInputChangeName}></input>
                    <label for="email">email</label>
                    <input type="text" id="email" name="email"  value={email}onChange={handleInputChangeEmail} ></input>
                    <button type="submit">Terminar compra</button>
                    <p>Gracias por tu compra {nombre}, te enviaremos tu comprobante al correo {email}</p>
                </form>
              </div> 
      : null}
      </div>
       );
  }
};

export default Cart;
