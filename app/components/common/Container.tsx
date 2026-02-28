import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.ComponentProps<"div">{
    children: React.ReactNode
}

const Container = ({children, className, ...props}: ContainerProps)=>{

    return(
        <div className="w-[85%] h-full max-md:w-[92&] max-sm:w-[95%] mx-auto">
            <div className={twMerge("w-full h-full flex !py-16", className)} {...props}>
                {children}
            </div>
        </div>
    )
}

export default Container