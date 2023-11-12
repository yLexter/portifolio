import React from "react";
import Presetation from "./Presetation";
import Skills from "../skills/Skills";
import BaseSection from "../UI/Section/BaseSection";
import { CSectionNames } from "@/app/entities";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <BaseSection
         id={CSectionNames.main}
         style={{ backgroundImage: 'url("./images/main-image.jpg" ' }}
         className="bg-cover bg-left flex w-full relative pt-header-height h-screen bg-gradient-to-r from-primary to-transparent"
      >
         <Presetation />
      </BaseSection>
   );
}
