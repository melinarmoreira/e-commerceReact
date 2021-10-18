// import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "./assets/monstera.jpg"
import "./Item.css"
import { Link } from "react-router-dom";



const Item = ({data}) => {

    return(
        
        <div className="itemCard">
            <Link to={`/detail/${data.id}`}>
            <h2>Plant: {data.id}</h2>
            <img src={Image} className="imgCard" alt="monstera"/>
            <p className="speciesCard">Species:  {data.name}</p>
            <p className="descriptionCard">Description: {data.username}</p>
            </Link>
        </div>
    )
}

export default Item;