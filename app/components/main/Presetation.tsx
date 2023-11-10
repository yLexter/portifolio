import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../UI/Button/Button";
import { SocialIcons } from "../UI/Socials/SocialIcon";

type IPropPresetation = {
   className?: string;
};

export default function Presetation({ className }: IPropPresetation) {
   return (
      <div
         className={twMerge(
            "w-7/12 flex min-h-[400px] justify-center flex-col gap-y-3",
            className
         )}
      >
         <div className="mb-4">
            <h1 className="text-color-text-main text-[2rem] font-bold">
               Olá, Eu sou o
               <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-[#28af3a] to-[#019a23]">
                  Lucas Maia
               </span>
            </h1>

            <p className="text-[1.5rem] font-semibold text-color-text-main">
               Eu sou um{" "}
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6320cf] to-[#be0ab5] ">
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

         <div className="flex gap-x-4 mb-4">
            <SocialIcons.Github />
            <SocialIcons.Linkedin />
            <SocialIcons.Twitter />
         </div>

         <div className="flex gap-x-4">
            <Button.Provider className=" bg-secondary h-12 w-40 hover:opacity-90 text-color-text-main font-bold py-2 px-4 rounded-xl transition duration-150 ease-in-out">
               Sobre Mim
            </Button.Provider>

            <Button.Provider className=" bg-secondary h-12 w-40 hover:opacity-90 text-color-text-main font-bold py-2 px-4 rounded-xl transition duration-150 ease-in-out">
               Meu CV
            </Button.Provider>
         </div>
      </div>
   );
}
