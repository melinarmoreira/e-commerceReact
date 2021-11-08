import Item from "./Item";
import { useEffect, useState } from "react";
import "./ItemList.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
// import { ItemsContext } from "./CartContext";


const ItemList = () => {
  // const [infoUsers, setInfoUsers] = useState([]);

  // useEffect(() => {
  //   const users = new Promise((resolve) => {
  //     resolve(true);
  //   });
  //   users.then(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => setInfoUsers(data));
  //   });
  // }, []);
   
    const [infoProd, setInfoProd] = useState([])
  // // console.log(productsData)
   useEffect(() => {
    const docs = [];
     const dataReq = async() => {
       const dataFirebase = await getDocs(collection(db, "products"));
       dataFirebase.forEach(element => {
        docs.push({...element.data()})
       });
       setInfoProd(docs);
     }
     dataReq();
   }, [])

  return (
    <div className="containerItem">
      {infoProd.map((info) => {
        return (
          <div key={info.id1}>
            <Item data={info} />
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
