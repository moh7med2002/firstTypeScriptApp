import React from "react";
import data from "../../data";
import AboutSlider from "./AboutSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MakeSlider(){

    let [subData,setData]=React.useState(data[0].clientsReviews)

    let resultComponents=subData.map((da,index)=>{
        return(
            <SwiperSlide key={index}><AboutSlider {...da} key={da.name}/></SwiperSlide>
        )
    })

    return(
        <div className="container lg:px-10 px-8 pt-6">
            {/* {resultComponents} */}
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
            {resultComponents}
        </Swiper>
        </div>
    )

}