import React from "react";
import SectionTitle from "../ui/Texts/SectionTitle";
import { TSkill } from "@/entities";
import CustomIcon from "../ui/Icon/CustomIcon";

type IPropSkill = {
   skill: TSkill;
};

export default function Skill({
   skill: { icons, title, description },
}: IPropSkill) {
   return (
      <article className="bg-[#24292d] h-auto rounded-lg shadow-lg p-4">
         <div className="flex gap-x-2 mb-2">
            {icons.map((icon) => (
               <CustomIcon
                  key={`Skill-${title}-${description}-${~~(
                     Math.random() * 1000
                  )}`}
                  hasColor
                  icon={icon}
               />
            ))}
         </div>

         <h3 className="font-semibold text-xl  mb-2 title-responsive">
            {title}
         </h3>
         <p className="text-muted paragraph-responsive">{description}</p>
      </article>
   );
}
