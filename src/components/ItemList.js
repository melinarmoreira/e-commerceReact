// import React, { useEffect } from "react";
import  Item from "./Item";
import { useState } from "react";
import "./ItemList.css"


const ItemList  = () => {

    const [infoUsers, setInfoUsers] = useState([]);

    setTimeout(() => {

        const users = new Promise((resolve) => {
            resolve(true);
        })
        users.then( () => {
    
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
        .then(response => response.json())
        .then(data => setInfoUsers(data))
        })
    }, 2000);  
    
    return(
        <div className="containerItem">
            {infoUsers.map((infoUser) => {
            return (
            <Item data={infoUser}/>
        )})}
        </div>
)
}
export default ItemList;