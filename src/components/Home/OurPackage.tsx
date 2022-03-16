import React from "react";
import data from "../../data";
import {useNavigate} from 'react-router-dom'
import PackageBox from '../PackageBox'


type Packeage={
    
        img: any;
        title: string;
        text: string;
    
}

export default function OurPackeage(){
    let [subData,setData]=React.useState<Packeage[]>(data[0].packagesData.slice(0,3));
    let navg=useNavigate();

    function handelPage(){
        setTimeout(()=>{
            navg('/packages')
        },500)
    }

    let resultJsx=subData.map((da,index)=>{
        return(
            <PackageBox {...da} key={index}/>
        )
    })

    return(
        <div className="py-12 mt-10 bg-light_bg text-center">
            <h2 className=" uppercase font-bold text-4xl mb-10">our packages</h2>
            <div className="container xl:px-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-10">
                {resultJsx}
            </div>
            <button className="bg-black py-2 px-5 text-white capitalize text-sm duration-300 hover:bg-main_hover"
            onClick={handelPage}>
                load more</button>
        </div>
    )
}