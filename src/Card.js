import './card.css';
import { useState } from 'react';


export default function Card(props){

    return(
        <div id="card_cover">
            
            <div id="img_cover">
                <img id="resim" src={require("" + props.img)} alt="tour image"/>
            </div>

            <div id="card_context">
                <div id="fLine">
                    <span id="name">{props.title.split(' ').map((item,index)=>{return item[0].toUpperCase() + item.substring(1, item.length)}).join(" ")}</span> 
                    <span id="price">${props.price}</span> </div>
                <div id="text">{props.desc} </div>
                

            </div>
        </div>
    )
}