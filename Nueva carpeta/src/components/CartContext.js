import React, { createContext, useState } from "react";
export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  let [counter, setCounter] = useState(0);
  // let [stock, setStock] = useState(dataCounter.id);

  const clear = () => {
    setCarrito([]);
    setCounter(0);
    console.log(carrito);
  };

  return (
    <ItemsContext.Provider
      value={{carrito, setCarrito, clear, counter, setCounter}}
    >
      {children}
    </ItemsContext.Provider>
  );
};
