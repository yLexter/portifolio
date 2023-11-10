import React from "react";
import SectionTitle from "../UI/Texts/SectionTitle";
import { TRandomIcon } from "@/app/entities";
import CustomIcon from "../UI/Icon/CustomIcon";

type IPropSkill = {
   skill: TRandomIcon;
};

export default function Skill({ skill }: IPropSkill) {
   return (
      <article className="flex justify-center items-center bg-[#24292d] h-24">
         <CustomIcon hasName icon={skill} />
      </article>
   );
}
