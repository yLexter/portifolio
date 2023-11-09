import { TRandomIconColors, TRandomIcon } from "@/app/entities";
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

import {
   SiNextdotjs,
   SiTypescript,
   SiTwitter,
   SiGithub,
   SiLinkedin,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IconType } from "react-icons";

type IPropCustomIcon = {
   icon: TRandomIcon;
   hasName?: boolean;
};

export default function CustomIcon({ icon, hasName = false }: IPropCustomIcon) {
   const randomIcons: Record<TRandomIcon, IconType> = {
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
      Twitter: SiTwitter,
      Github: SiGithub,
      Linkedin: SiLinkedin,
   };

   const IconSelected = randomIcons[icon];

   if (!IconSelected) throw new Error("Icon Provided is invalid");

   return (
      <div className="flex items-center flex-col gap-y-1">
         <IconSelected size={28} color={TRandomIconColors[icon]} />
         {hasName && (
            <span className="text-base text-color-text-secondary">{icon}</span>
         )}
      </div>
   );
}
