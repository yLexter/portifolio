import React from "react";
import { twMerge } from "tailwind-merge";

type IPropPresetation = {
   className?: string;
};

export default function Presetation({ className }: IPropPresetation) {
   return (
      <div
         className={twMerge(
            "bg-primary flex min-h-[400px] justify-center flex-col gap-y-3 h-[50vh] p-4",
            className
         )}
      >
         <h1 className="text-color-text-main text-3xl capitalize font-medium after:content-['.'] after:text-secondary after:text-[4rem] ">
            Olá
         </h1>

         <h3 className="text-color-text-main pl-4 relative flex text-base">
            <span className="ml-2 before:absolute before:bottom-[40%] before:left-[-1%] before:content-[''] before:w-6 before:h-[1px] before:bg-secondary">
               Eu sou o Lucas Maia
            </span>
         </h3>

         <p className="text-base font-semibold text-color-text-main">
            Eu sou um{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#28af3a] to-[#013a23] ">
               Desenvolvedor Web
            </span>{" "}
         </p>

         <p className="text-[rgb(255,255,255,0.5)]">Descrição</p>

         <button className="cursor-pointer text-center h-14 w-56 bg-gradient-to-r from-[#28af3a] to-[#013a23] text-color-text-main">
            Meu CV
         </button>
      </div>
   );
}
