"use client";

import React from "react";
import SectionTitle from "../ui/Section/SectionTitle";
import Skill from "./Skill";
import BaseSection from "../ui/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { CSectionNames } from "@/entities";

type IPropSkill = {};

export default function Skills({}: IPropSkill) {
   const {
      currentData: { sectionTitle, skills },
   } = useJsonDataContext();

   return (
      <BaseSection id={CSectionNames.skills}>
         <SectionTitle title={sectionTitle.skills} />

         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
               <Skill key={`Skills-${skill.description}`} skill={skill} />
            ))}
         </div>
      </BaseSection>
   );
}
