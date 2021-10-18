// import React, { useEffect } from "react";
import  Item from "./Item";
import { useEffect, useState } from "react";
import "./ItemList.css"
// import { Link } from "react-router-dom";
// import ItemDetail from "./ItemDetail";
// import { useParams } from "react-router";


const ItemList  = () => {

    const [infoUsers, setInfoUsers] = useState([]);
    

    useEffect(() => {

        const users = new Promise((resolve) => {
            resolve(true);
        })
        users.then( () => {
    
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setInfoUsers(data))
        })
    }, []);  
    console.log(infoUsers)
    
    return(
        <div className="containerItem">
            {infoUsers.map((infoUser) => {
            return (
                
                <div key={infoUser.id}>
                    <Item data={infoUser}/>
                </div>
        )})}
        </div>
)
}
export default ItemList;