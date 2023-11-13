import React from "react";
import SectionTitle from "../UI/Texts/SectionTitle";
import { TSkill } from "@/app/entities";
import CustomIcon from "../UI/Icon/CustomIcon";

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
                  key={`Skill-${title}-${icon}`}
                  hasColor
                  icon={icon}
               />
            ))}
         </div>

         <h3 className="font-semibold text-xl text-color-text-main mb-2 title-responsive">
            {title}
         </h3>
         <p className="text-color-text-secondary paragraph-responsive">
            {description}
         </p>
      </article>
   );
}
