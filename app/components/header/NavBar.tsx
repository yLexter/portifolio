import React from "react";
import { twMerge } from "tailwind-merge";

type IPropNav = {
   className?: string;
};

export default function NavBar({ className }: IPropNav) {
   const classNameLi =
      "text-color-text-main font-light text-sm hover:text-secondary";

   return (
      <nav className={twMerge("", className)}>
         <ul className="flex justify-evenly">
            <li className={classNameLi}>Início</li>
            <li className={classNameLi}>Sobre Mim</li>
            <li className={classNameLi}>Skills</li>
            <li className={classNameLi}>Projetos</li>
            <li className={classNameLi}>Contate-me</li>
         </ul>
      </nav>
   );
}
