// import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
// import Image from "./assets/monstera.jpg"
import "./Item.css"
import { Link } from "react-router-dom";



const Item = ({data}) => {

    
    return(
        
        <div className="itemCard">
            <Link to={`/detail/${data.id1}`}>
            <h2>{data.title}</h2>
            <img src={data.img} className="imgCard" alt="monstera"/>
            <p className="speciesCard"> Cuidados:  {data.cuidados}</p>
            <p className="descriptionCard">Description: {data.description}</p>
            </Link>
        </div>
    )
}

export default Item;