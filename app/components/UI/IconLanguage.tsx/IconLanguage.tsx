import { TLanguageColors, TLanguagesAndFrameworks } from "@/app/entities";
import React from "react";

import { TbBrandCpp } from "react-icons/tb";

import {
   FaReact,
   FaNode,
   FaPython,
   FaJava,
   FaHtml5,
   FaCss3,
   FaJsSquare,
   FaNodeJs,
} from "react-icons/fa";

import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { IconType } from "react-icons";

type IPropIconLanguage = {
   icon: TLanguagesAndFrameworks;
};

export default function IconLanguage({ icon }: IPropIconLanguage) {
   const languageIcons: Record<TLanguagesAndFrameworks, IconType> = {
      JavaScript: FaJsSquare,
      TypeScript: SiTypescript,
      HTML: FaHtml5,
      CSS: FaCss3,
      React: FaReact,
      NodeJs: FaNodeJs,
      Python: FaPython,
      Java: FaJava,
      ExpressJs: FaNode,
      C: TbBrandCpp,
      MongoDB: DiMongodb,
      NextJs: SiNextdotjs,
   };

   const IconSelected = languageIcons[icon];

   if (!IconSelected) throw new Error("Icon Provided is invalid");

   return (
      <div className="flex items-center flex-col gap-y-4">
         <IconSelected size={30} color={TLanguageColors[icon]} />
         <span className="text-base text-color-text-secondary">{icon}</span>
      </div>
   );
}
