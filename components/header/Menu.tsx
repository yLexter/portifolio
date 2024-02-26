import React from "react";
import { twMerge } from "tailwind-merge";
import ListNaveBar from "./ListNaveBar";

type IPropMenu = {
   className?: string;
   isOpen: boolean;
   toggleMenu: () => void;
};

export default function HamburguerMenu({
   className,
   isOpen,
   toggleMenu,
}: IPropMenu) {
   return (
      <div
         className={twMerge(
            "inline-block items-center cursor-pointer",
            className
         )}
         onClick={toggleMenu}
      >
         <div
            className={`w-8 h-[2px] bg-white transition-transform duration-300 ${
               isOpen ? "transform rotate-45 translate-y-1.5" : ""
            }`}
         />
         <div
            className={`w-8 h-[2px] bg-white my-1 transition-opacity duration-300 ${
               isOpen ? "opacity-0" : ""
            }`}
         />
         <div
            className={`w-8 h-[2px] bg-white transition-transform duration-300 ${
               isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
         />

         {isOpen && (
            <div className="absolute top-header-height left-0 h-screen w-screen p-4 bg-primary">
               <ListNaveBar
                  classNameLi="mb-4 text-[2.5rem] font-semibold"
                  className="flex flex-col justify-between items-center"
               />
            </div>
         )}
      </div>
   );
}
