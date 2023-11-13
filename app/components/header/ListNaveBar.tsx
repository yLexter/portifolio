import { CSectionNames, TSectionName } from "@/app/entities";
import React from "react";
import { twMerge } from "tailwind-merge";

type IPropListNaveBar = {
   className?: string;
   classNameLi?: string;
};

const handleSection = (sectionId: TSectionName) => {
   const section = document.getElementById(sectionId);

   if (section) {
      section.scrollIntoView({
         behavior: "smooth",
      });
   }
};

export default function ListNaveBar({
   className,
   classNameLi,
}: IPropListNaveBar) {
   const classLi = twMerge(
      "relative text-color-text-main font-light text-xl cursor-pointer active:text-secondary",
      "after:absolute after:content-[''] after:w-[0px] after:h-[2px] after:bg-secondary after:bottom-[-5px] after:left-0 after:duration-300",
      "after:ease-in-out after:mb-1 hover:after:w-full",
      classNameLi
   );

   return (
      <ul className={twMerge("", className)}>
         <li
            onClick={() => handleSection(CSectionNames.main)}
            className={classLi}
         >
            Início
         </li>
         <li
            onClick={() => handleSection(CSectionNames.aboutMe)}
            className={classLi}
         >
            Sobre Mim
         </li>

         <li
            onClick={() => handleSection(CSectionNames.skills)}
            className={classLi}
         >
            Skills
         </li>
         <li
            onClick={() => handleSection(CSectionNames.timeline)}
            className={classLi}
         >
            Timeline
         </li>
         <li
            onClick={() => handleSection(CSectionNames.projects)}
            className={classLi}
         >
            Projetos
         </li>
      </ul>
   );
}
