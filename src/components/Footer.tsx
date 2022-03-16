import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import{AiFillPhone} from 'react-icons/ai'
import footerImage from '../images/footer-bg.jpg'

export default function Footer(){
    return(
        <footer style={{backgroundImage:`url(${footerImage})`,backgroundPosition:"center",
        backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="py-7">
            <div className="container xl:px-6 cursor-pointer 
            px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                    <h3 className="text-white capitalize mb-3">quick links</h3>
                    <ul>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                home</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                about</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                package</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                book</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white capitalize mb-3">extra links</h3>
                    <ul>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                need help?</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                about us</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                privacy policy</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                terms of use</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white capitalize mb-3">contact info</h3>
                    <ul>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                +123-123-1234</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                +111-222-3333</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                mohaHesham@Gmail.com</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                gaza, palestine</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white capitalize mb-3">contact info</h3>
                    <ul>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                facebook</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                twitter</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                instagram</span>
                        </li>
                        <li className="mb-3">
                            <FontAwesomeIcon icon={faAngleRight} className=" text-main_hover mr-2 text-sm"/> 
                            <span className="capitalize font-semibold text-black_alt duration-300 hover:translate-x-2 inline-block">
                                linkedin</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}