import React from "react";
import Landing from "../Landing";
import bgImg from '../../images/header-bg-3.png'
import { useForm,SubmitHandler } from "react-hook-form";
import { Interface } from "readline";

interface IFormInput{
    fullName:string
    email:string
    phoneNumber:string
    address:string
    visitPlace:string
    guestsNumber:number
    arrivals:string
    leaving:string
}

export default function Bookpage(){
    const{register,handleSubmit} =useForm<IFormInput>();
    const onSubmit:SubmitHandler<IFormInput> = (data) => console.log(data);
    return(
        <div>
            <Landing title="book now" img={bgImg}/>
            <h2 className="text-center uppercase mb-8 font-bold text-4xl lg:text-5xl">book your trip!</h2>
                <div className="container lg:px-7">
                    {/* Start Row One */}
                    <form className="bg-light_bg p-5 mb-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3">
                        <div >
                            <label className="block capitalize text-black_alt mb-3">full name:</label>
                            <input {...register('fullName')} placeholder="enter your name"
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            placeholder:text-black_alt py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">email:</label>
                            <input {...register('email')} placeholder="enter your email"
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            placeholder:text-black_alt py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">phone:</label>
                            <input {...register('phoneNumber')} placeholder="enter your number"
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            placeholder:text-black_alt py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">address:</label>
                            <input {...register('address')} placeholder="enter your address"
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            placeholder:text-black_alt py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">where to:</label>
                            <input {...register('visitPlace')} placeholder="place you want to visit"
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            placeholder:text-black_alt py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">how many:</label>
                            <input type={"number"} {...register('guestsNumber')} 
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">arrivals:</label>
                            <input type="date" {...register('arrivals')} 
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            py-[4px] px-[10px] w-[100%]" />
                        </div>
                        <div>
                            <label className="block capitalize text-black_alt mb-3">leaving:</label>
                            <input type="date" {...register('leaving')} 
                            className="border border-black outline-none focus:bg-light_black focus:text-white
                            py-[4px] px-[10px] w-[100%]" />
                        </div>
                        </div>
                        <input type="submit" value={"Submit"}
                        className="bg-black py-[6px] px-5 text-white capitalize text-sm my-4 duration-300 hover:bg-main_hover
                            cursor-pointer"/>
                    </form>
                    {/* End row one */}
                </div>
        </div>
    )
}