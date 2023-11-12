import { CSectionNames, TSectionName } from "@/app/entities";
import React from "react";
import { twMerge } from "tailwind-merge";

type IPropListNaveBar = {
   className?: string;
   classNameLi?: string;
};

export default function ListNaveBar({
   className,
   classNameLi,
}: IPropListNaveBar) {
   const classLi = twMerge(
      "text-color-text-main font-light text-xl hover:text-secondary cursor-pointer active:text-secondary",
      classNameLi
   );

   const handleSection = (sectionId: TSectionName) => {
      const section = document.getElementById(sectionId);

      if (section) {
         window.scrollTo({
            top: section.getBoundingClientRect().top,
            behavior: "smooth",
         });
      }
   };

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
            onClick={() => handleSection(CSectionNames.timeline)}
            className={classLi}
         >
            Timeline
         </li>
         <li
            onClick={() => handleSection(CSectionNames.skills)}
            className={classLi}
         >
            Skills
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
