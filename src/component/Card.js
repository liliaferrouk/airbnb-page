import React from "react";
//import star from "../images/star.png"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            {/* despaly if the condition is verefied:  */}
            {props.openSpots === 0 &&  <div className="card--badge" >SOLD OUT</div>} 

            <img src={`../images/${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src={"../images/star.png"} width="14px"/> 
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span>/ person</p>
        </div>
    )
}