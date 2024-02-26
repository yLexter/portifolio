"use client";

import React, { useState } from "react";
import NavBar from "./NavBar";
import { twJoin, twMerge } from "tailwind-merge";
import useScrollPosition from "../hooks/useScrollPosition";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { CSectionNames, TSectionName } from "@/entities";

type IPropHeader = {};

const handleSection = (sectionId: TSectionName) => {
   const section = document.getElementById(sectionId);

   if (section) {
      section.scrollIntoView({
         behavior: "smooth",
      });
   }
};

export default function Header({}: IPropHeader) {
   const { scrollPosition } = useScrollPosition();
   const { data } = useJsonDataContext();

   return (
      <header
         className={twJoin(
            `${scrollPosition > 0 ? "bg-[#070916]" : "bg-transparent"}`,
            "transtion duration-300 ease-in-out",
            "fixed top-0 left-0 w-full h-header-height",
            "flex justify-between items-center z-10 px-spacing-page"
         )}
      >
         <div className="flex-1">
            <h1
               onClick={() => handleSection(CSectionNames.main)}
               className="cursor-pointer inline-block text-2xl font-semibold  "
            >
               {data.name}
            </h1>
         </div>

         <div className="flex flex-[2] gap-x-10 items-center flex-row-reverse justify-around lg:flex-row lg:justify-between">
            <NavBar className="lg:w-[90%]" />
         </div>
      </header>
   );
}
