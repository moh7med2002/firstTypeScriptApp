import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import data from '../../data'


type SliderType={
    img:any,
    description:string
    name:string
    job:string
    review:number
}

export default function AboutSlider(props:SliderType){
     
     
    let arr= []
    for(let i=0;i<props.review;i++){
        arr.push(<li className=" text-main_hover" key={i}><FontAwesomeIcon icon={faStar}/></li>);
    }
    
    
    return(
        <div className="bg-white p-5 border border-black text-center"> 
            <ul className="flex justify-center gap-1 mb-3">{arr}</ul>
            
            <p className=" text-black_alt leading-7 px-[6px] mb-[12px]">{props.description}</p>
            <h4 className="font-bold capitalize">{props.name}</h4>
            <span className="capitalize text-main_hover font-bold block mb-3">{props.job}</span>
            <img src={props.img} alt="" className="w-[75px] h-[75px] rounded-[50%] mx-auto"/>
        </div>
    )

}