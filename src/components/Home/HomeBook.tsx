import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homebook(){
    let navg=useNavigate();

    function changePage(){
        setTimeout(()=>{
            navg('/bookNow')
        },500)
    }
    return(
        <div className="text-center py-10">
            <h2 className="font-bold text-black capitalize text-2xl mb-5">upto 50% off</h2>
            <p className="  w-10/12 lg:w-6/12 mx-auto mb-5 text-black_alt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam reiciendis mollitia sint vel ab!
                sit, amet consectetur adipisicing elit. 
            </p>
            <button className="bg-black py-2 px-5 text-white capitalize text-sm duration-300 hover:bg-main_hover"
            onClick={changePage}>
                load more</button>

        </div>
    )
}