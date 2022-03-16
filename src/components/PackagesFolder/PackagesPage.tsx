import React from "react";
import Landing from "../Landing";
import bgImg from '../../images/header-bg-2.png'
import data from "../../data";
import PackageBox from "../PackageBox";

export default function PackagesPage(){

    let [allData,setData]=React.useState(data[0].packagesData);
    let [subData,setSubData]=React.useState(data[0].packagesData.slice(0,6));

    let resultJsx=subData.map((da,index)=>{
        return(
            <PackageBox {...da} key={index}/>
        )
    })

    let index=subData.length;
    let[showBtn,setShowBtn]=React.useState(true);
    

    function showMore(){
        if(index < allData.length){
            index+=3;
            setTimeout(()=>{
                setSubData(allData.slice(0,index));
            },250)
        }
        if(index>=allData.length){
            setShowBtn(false)
        }
    }

    return(
        <div className="text-center">
            <Landing img={bgImg} title="packages"/>
            <h2 className="text-center uppercase mb-8 font-bold text-4xl lg:text-5xl">top destinations</h2>
            <div className="container xl:px-6 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-10">
                {resultJsx}
            </div>
            {showBtn && 
            <button className="bg-black py-2 px-5 text-white capitalize text-sm duration-300 hover:bg-main_hover mb-6"
            onClick={showMore}> 
                load more</button>}
        </div>
    )

}