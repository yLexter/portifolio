import { TRandomTechnologyColors, TRandomTechnology } from "@/entities";
import React from "react";

import { TbLetterC } from "react-icons/tb";
import { BiLogoGit } from "react-icons/bi";
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
   SiTailwindcss,
   SiSqlite,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { MdEmail } from "react-icons/md";

type IPropCustomIcon = {
   icon: TRandomTechnology;
   hasName?: boolean;
   hasColor?: boolean;
   className?: string;
};

const randomIcons: Record<TRandomTechnology, IconType> = {
   JavaScript: FaJsSquare,
   TypeScript: SiTypescript,
   HTML: FaHtml5,
   CSS: FaCss3,
   React: FaReact,
   NodeJs: FaNodeJs,
   Python: FaPython,
   Java: FaJava,
   ExpressJs: FaNode,
   C: TbLetterC,
   MongoDB: DiMongodb,
   NextJs: SiNextdotjs,
   Twitter: SiTwitter,
   Github: SiGithub,
   Linkedin: SiLinkedin,
   Git: BiLogoGit,
   Tailwind: SiTailwindcss,
   Sql: SiSqlite,
   Email: MdEmail,
};

export default function CustomIcon({
   icon,
   hasName = false,
   className,
   hasColor = false,
}: IPropCustomIcon) {
   const IconSelected = randomIcons[icon];
   const colorIcon = TRandomTechnologyColors[icon];

   if (!IconSelected) throw new Error("Icon Provided is invalid");

   return (
      <div className="flex items-center flex-col gap-y-1">
         <IconSelected
            color={hasColor ? colorIcon : "white"}
            className={twMerge("", className)}
            size={28}
         />
         {hasName && (
            <span className="text-base text-color-text-secondary">{icon}</span>
         )}
      </div>
   );
}
