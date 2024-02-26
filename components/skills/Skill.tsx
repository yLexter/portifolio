import React from "react";
import SectionTitle from "../ui/Section/SectionTitle";
import { TSkill } from "@/entities";
import CustomIcon from "../ui/SocialsIcons/CustomIcon";

type IPropSkill = {
   skill: TSkill;
};

export default function Skill({
   skill: { icons, title, description },
}: IPropSkill) {
   return (
      <article className="bg-card h-auto rounded-lg shadow-lg p-4">
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

         <h3 className="font-semibold text-xl mb-2 title-responsive">
            {title}
         </h3>
         <p className="text-muted-foreground paragraph-responsive">
            {description}
         </p>
      </article>
   );
}
