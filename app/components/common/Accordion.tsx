"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge"
import { MdArrowOutward } from "react-icons/md";

interface AccordionType extends React.ComponentProps<"div"> {
  title: string, children: React.ReactNode, id: string
}

const AccordionItem = ({ title, children, id, className, ...props }: AccordionType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={twMerge(" last:border-none bg-primary/10 outline-0 w-full !px-4 !py-3 rounded-2xl", className)} {...props}>
      <button
        id={`controls-${id}`}
        type="button"
        className="flex w-full items-center justify-between gap-4  p-4 text-left outline-0 underline-offset-2"
        aria-controls={id}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={`${isExpanded ? 'font-bold' : 'font-medium'} text-black`}>
          {title}
        </span>


        <div className={`!p-2 rounded-full ${isExpanded? "bg-primary" : "bg-background"}`}>
          <MdArrowOutward className={`size-5 shrink-0  transition-transform duration-300 ${isExpanded ? 'text-white rotate-180' : ' text-black rotate-270'}`} />

        </div>



      </button>

      <div
        id={id}
        role="region"
        aria-labelledby={`controls-${id}`}
        className={`grid transition-all outline-0 duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 outlin-0 text-sm sm:text-base text-pretty text-slate-700 flex flex-col !gap-y-3 !mt-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem