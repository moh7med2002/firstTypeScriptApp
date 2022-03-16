import React from "react";

export default function Service(props:{img:string, desc:string}){
    
    return(
        <div className="service bg-main_hover text-center py-5 px-3 cursor-pointer duration-300 hover:bg-black">
            <img src={props.img} alt="" className="mx-auto"/>
            <h4 className="text-white font-bold capitalize pt-3">{props.desc}</h4>
        </div>
    )
}