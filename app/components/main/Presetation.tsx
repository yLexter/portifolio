import React from "react";
import { twMerge } from "tailwind-merge";

type IPropPresetation = {
   className?: string;
};

export default function Presetation({ className }: IPropPresetation) {
   return (
      <div
         className={twMerge(
            "flex min-h-[400px] justify-center flex-col gap-y-3",
            className
         )}
      >
         <div className="mb-4">
            <h1 className="text-color-text-main text-2xl font-bold">
               Olá, Eu sou o
               <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-[#28af3a] to-[#019a23]">
                  Lucas Maia
               </span>
            </h1>

            <p className="text-base font-semibold text-color-text-main">
               Eu sou um{" "}
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#28af3a] to-[#013a23] ">
                  Desenvolvedor Web
               </span>{" "}
            </p>
         </div>

         <p className="text-[rgb(255,255,255,0.5)] mb-4">
            Venho me dedicando todos os dias em programação. Desde o início, não
            houve um único dia em que não tenha continuado a aprender, com o
            objetivo de me tornar um desenvolvedor Full Stack excepcional. Meu
            foco é resolver problemas do mercado
         </p>

         <button className="cursor-pointer text-center h-14 w-56 bg-gradient-to-r from-[#28af3a] to-[#013a23] text-color-text-main">
            Meu CV
         </button>
      </div>
   );
}
