import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import React,{useEffect} from "react";

import "swiper/css";
import "swiper/css/navigation";
import data from "../../data";

type SliderData={
    sliderData:{img:string , title:string}[]
}

export default function HomeSlider(){
    const [allData,setData]=React.useState<SliderData>(data[0]);

    let resultComponets=allData.sliderData.map(dat=>{
        
        return(
            <SwiperSlide key={dat.title}>
                
                <div style={{backgroundImage:`url(${dat.img})`,height:"75vh"}} 
                className="bg-center bg-no-repeat bg-cover relative text-center" >
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" >
                        <h3 className="capitalize text-light_white mb-3" >
                            explore, discover, travel
                        </h3>
                        <h4 className="text-white font-bold uppercase text-3xl lg:text-6xl  md:text-5xl mb-4" >
                            {dat.title}
                        </h4>
                        <button className=" bg-black/60 py-2 px-3 text-white capitalize text-sm duration-300 hover:bg-main_hover">
                            discover tour
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
    return(
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative">
            {resultComponets}
        </Swiper>
    )
}