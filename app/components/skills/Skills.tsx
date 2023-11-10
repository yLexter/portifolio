import React from "react";
import SectionTitle from "../UI/Texts/SectionTitle";
import { TRandomIcon } from "@/app/entities";
import Skill from "./Skill";

type IPropSkill = {};

export default function Skills({}: IPropSkill) {
   const skills: TRandomIcon[] = [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "C",
      "Java",
      "ExpressJs",
      "Python",
      "MongoDB",
      "NextJs",
      "Github",
   ];

   return (
      <section className="mb-spacing-section px-spacing-page">
         <SectionTitle title="Skills" />

         <div className="grid grid-cols-3 gap-4">
            {skills.map((skill) => (
               <Skill key={`Skills-${skill}`} skill={skill} />
            ))}
         </div>
      </section>
   );
}
