"use client";

import { CSectionNames, TSectionName } from "@/entities";
import { useJsonDataContext } from "@/contexts/JsonProvider";
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
   const {
      currentData: { naveBar },
   } = useJsonDataContext();

   const classLi = twMerge(
      "relative  font-light text-xl cursor-pointer active:text-secondary",
      "after:absolute after:content-[''] after:w-[0px] after:h-[2px]",
      "after:bg-primary after:bottom-[-5px] after:left-0 after:duration-300",
      "after:ease-in-out after:mb-1 hover:after:w-full",
      classNameLi
   );

   return (
      <ul className={twMerge("", className)}>
         <li
            onClick={() => handleSection(CSectionNames.home)}
            className={classLi}
         >
            {naveBar.home}
         </li>
         <li
            onClick={() => handleSection(CSectionNames.aboutMe)}
            className={classLi}
         >
            {naveBar.aboutMe}
         </li>

         <li
            onClick={() => handleSection(CSectionNames.skills)}
            className={classLi}
         >
            {naveBar.skills}
         </li>
         <li
            onClick={() => handleSection(CSectionNames.timeline)}
            className={classLi}
         >
            {naveBar.timeline}
         </li>
         <li
            onClick={() => handleSection(CSectionNames.projects)}
            className={classLi}
         >
            {naveBar.projects}
         </li>
         <li
            onClick={() => handleSection(CSectionNames.contact)}
            className={classLi}
         >
            {naveBar.contact}
         </li>
      </ul>
   );
}
