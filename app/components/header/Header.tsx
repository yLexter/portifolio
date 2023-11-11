"use client";

import React from "react";
import NavBar from "./NavBar";
import { twJoin, twMerge } from "tailwind-merge";
import useScrollPosition from "../hooks/useScrollPosition";
import { useJsonDataContext } from "@/contexts/JsonProvider";

type IPropHeader = {};

export default function Header({}: IPropHeader) {
   const { scrollPosition } = useScrollPosition();
   const { data } = useJsonDataContext();

   return (
      <header
         className={twJoin(
            `${scrollPosition > 0 ? "bg-[#070916]" : "bg-transparent"}`,
            "transtion duration-300 ease-in-out",
            "fixed top-0 left-0 w-full h-header-height",
            "flex justify-around items-center z-10 px-spacing-page"
         )}
      >
         <h1 className="text-2xl font-semibold flex-1 text-color-text-main ">
            {data.name}
         </h1>
         <NavBar className="flex-1" />
      </header>
   );
}
