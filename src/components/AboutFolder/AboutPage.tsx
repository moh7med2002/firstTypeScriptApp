import React from "react";
import bgImage from '../../images/header-bg-1.png'
import Landing from "../Landing";
import girlImg from '../../images/about-img.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMap ,faHandHoldingDollar , faFaceSmile} from '@fortawesome/free-solid-svg-icons'
import MakeSlider from "./MakeSlider";

export default function AboutPage(){
    return(
        <div className="">
            <Landing title="about us" img={bgImage}/>
            {/* Start Why Choose Us */}
            <div className="container xl:px-6 grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-2 items-center">
                <img src={girlImg} alt="about" />
                <div className="content md:text-center px-3">
                    <h4 className="font-bold capitalize text-2xl mb-4">why choose us?</h4>
                    <p className=" text-black_alt mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum sed quam minus libero ex?
                        consectetur adipisicing elit.
                    </p>
                    <p className=" text-black_alt mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum sed quam minus libero ex?
                        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    </p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="bg-light_bg p-3">
                            <FontAwesomeIcon icon={faMap} className=" text-[28px] text-main_hover mb-2"/>
                            <span className="block capitalize font-semibold text-[14px]">best destinations</span>
                        </div>
                        <div className="bg-light_bg p-3">
                            <FontAwesomeIcon icon={faHandHoldingDollar} className=" text-[28px] text-main_hover mb-2"/>
                            <span className="block capitalize font-semibold text-[14px]">affordable prices</span>
                        </div>
                        <div className="bg-light_bg p-3">
                            <FontAwesomeIcon icon={faFaceSmile} className=" text-[28px] text-main_hover mb-2"/>
                            <span className="block capitalize font-semibold text-[14px]">24/7 support</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us */}
            {/* Start Client Reiview */}
            <div className="py-7 bg-light_bg mt-10">
                <h2 className="text-center uppercase font-bold text-4xl lg:text-5xl mb-5">clients reviews</h2>
                <MakeSlider/>
            </div>
            {/* End Client Reiview */}
        </div>
    )
}