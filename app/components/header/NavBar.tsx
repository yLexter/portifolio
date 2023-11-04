import React from "react";
import { twMerge } from "tailwind-merge";

type IPropNav = {
   className?: string;
};

export default function NavBar({ className }: IPropNav) {
   const classNameLi =
      "text-color-text-main font-light text-xl hover:text-secondary curson-pointer";

   return (
      <nav className={twMerge("", className)}>
         <ul className="flex justify-between">
            <li className={classNameLi}>Início</li>
            <li className={classNameLi}>Sobre Mim</li>
            <li className={classNameLi}>Skills</li>
            <li className={classNameLi}>Projetos</li>
            <li className={classNameLi}>Contate-me</li>
         </ul>
      </nav>
   );
}
