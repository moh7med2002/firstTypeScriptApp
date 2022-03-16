import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


type PackeageProps={
    
    img: any;
    title: string;
    text: string;

}

export default function PackageBox(props:PackeageProps){
    AOS.init();
    return(
        <div className="border border-black p-0 text-center bg-white" data-aos="zoom-in-up">
            <div className="overflow-hidden">
            <img src={props.img} alt="" className="duration-300  hover:scale-125" />
            </div>
            <h3 className="font-bold capitalize my-4 text-xl">{props.title}</h3>
            <p className=" text-black_alt text-sm px-3 leading-6">{props.text}</p>
            <button className="bg-black py-[6px] px-5 text-white capitalize text-sm my-4 duration-300 hover:bg-main_hover">
                book now</button>
        </div>
    )
}