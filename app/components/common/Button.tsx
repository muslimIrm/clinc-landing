import React from "react"
import { twMerge } from "tailwind-merge"
import { MdArrowOutward } from "react-icons/md";

interface ButtonType extends React.ComponentProps<"a">{
    title: string,
    styleArrow?: string
}

const Button = ({title,styleArrow= "",href="#", className, ...props}:ButtonType) => {

    return (
        <a href={href} className={twMerge("!px-6 !py-2 shadow-md translate duration-300  hover:shadow-lg bg-main text-white rounded-3xl text-lg flex !gap-2 items-center group cursor-pointer", className)} {...props}>{title} <MdArrowOutward className={twMerge(` rotate-270 text-xl group-hover:scale-110 group-hover:-translate-y-1 group-hover:-translate-x-2 translate duration-300`, styleArrow)}/></a>
        

    )
}

export default Button