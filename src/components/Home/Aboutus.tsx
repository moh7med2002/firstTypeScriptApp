import React from "react";
import image from '../../images/about-img.jpg'
import { useNavigate } from "react-router-dom";

export default function AboutUs(){
    let navg =useNavigate();

    function changePage(){
        setTimeout(()=>{
            navg("/about")
        },500)
    }
    return(
        <div className="container xl:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center py-10">
                <img src={image} alt="about"/>
            <div className="bg-light_bg p-5">
                <h3 className="capitalize font-bold text-2xl mb-3">about us</h3>
                <p className="  text-black_alt mb-3 leading-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus molestiae dicta quae?
                    amet consectetur adipisicing elit.
                </p>
                <button onClick={changePage} 
                className="bg-black py-2 px-5 text-white capitalize text-sm duration-300 hover:bg-main_hover">
                    read more</button>
            </div>
        </div>
    )
}