import React from "react";
import Presetation from "./Presetation";
import BaseSection from "../ui/Section/BaseSection";
import { CSectionNames } from "@/entities";
import { twMerge } from "tailwind-merge";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <BaseSection
         id={CSectionNames.main}
         style={{ backgroundImage: 'url("./images/main-image.jpg" ' }}
         className={twMerge(
            "bg-cover bg-left flex w-full relative pt-header-height h-screen",
            "after:content-[''] after:left-0 after:absolute after:bottom-0",
            "after:w-full after:h-5 bg-[#040710]",
            "after:bg-gradient-to-b after:from-[#040710] after:to-background"
         )}
      >
         <Presetation />
      </BaseSection>
   );
}
