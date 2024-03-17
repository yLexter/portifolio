import React from "react";
import Presetation from "./Presetation";
import BaseSection from "../ui/Section/BaseSection";
import { CSectionNames } from "@/entities";
import { twMerge } from "tailwind-merge";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <BaseSection
         id={CSectionNames.home}
         style={{ backgroundImage: 'url("./images/main-image.jpg" ' }}
         className={twMerge(
            "bg-cover bg-left flex w-full relative pt-header-height h-screen"
         )}
      >
         <Presetation />
      </BaseSection>
   );
}
