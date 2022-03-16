import React from "react";
import HomeSlider from "./HomeSlider";
import Service from "./Services";
import data from "../../data";
import AboutUs from "./Aboutus";
import OurPackeage from "./OurPackage";
import Homebook from "./HomeBook";

type Services={
    img:any,
    desc:string
}

export default function HomeApp(){
    const[servicesData,setServicesData]=React.useState<Services[]>(data[0].servicesData);
    
    let componetsService=servicesData.map((serv,index)=>{
        return(
            <Service img={`${serv.img}`} desc={serv.desc} key={index}/>
        )
    })

    return(
        <div className="home">
            <HomeSlider/>
            <div className="services-parent py-11">
                <h2 className="text-center uppercase font-bold text-4xl">our services</h2>
                <div className="pt-6 container mx-auto xl:px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-2">
                    {componetsService}
                </div>
            </div>
            <AboutUs/>
            <OurPackeage/>
            <Homebook/>
        </div>
    )
}