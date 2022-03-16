import React from "react";

type LandingProps={
    title:string
    img:any
}

export default function Landing(props:LandingProps){
   
    return(
        <div className="pt-[80px] bg-center bg-no-repeat bg-cover h-[65vh] flex justify-center items-center"
            style={{backgroundImage:`url(${props.img})`}}>
            <h2 className="text-white uppercase font-bold lg:text-7xl text-6xl mb-20">
                {props.title}
            </h2>
        </div>
    )
}