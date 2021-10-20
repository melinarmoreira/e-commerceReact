import Item from "./Item";
import { useEffect, useState } from "react";
import "./ItemList.css";

const ItemList = () => {
  const [infoUsers, setInfoUsers] = useState([]);

  useEffect(() => {
    const users = new Promise((resolve) => {
      resolve(true);
    });
    users.then(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setInfoUsers(data));
    });
  }, []);
  console.log(infoUsers);

  return (
    <div className="containerItem">
      {infoUsers.map((infoUser) => {
        return (
          <div key={infoUser.id}>
            <Item data={infoUser} />
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
