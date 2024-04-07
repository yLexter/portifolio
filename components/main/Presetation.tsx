"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { CSectionNames, TSectionName } from "@/entities";
import { SocialIcon } from "../ui/SocialsIcons/SocialIcon";

type IPropPresetation = {
   className?: string;
};

const handleSection = (sectionId: TSectionName) => {
   const section = document.getElementById(sectionId);

   if (section) {
      section.scrollIntoView({
         behavior: "smooth",
      });
   }
};

export default function Presetation({ className }: IPropPresetation) {
   const {
      currentData: { about },
      data,
   } = useJsonDataContext();

   const SocialIcons = SocialIcon();

   return (
      <div
         className={twMerge(
            "relative w-full md:w-9/12 lg:w-8/12 flex min-h-[400px] justify-center flex-col gap-y-3",
            className
         )}
      >
         <div className="mb-4">
            <h1 className="font-bold text-[1.3rem] sm:text-[1.4rem] md:text-[1.8rem] lg:text-[2.3rem]">
               👋 {about.presetation}
               <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-[#28af3a] to-[#019a23]">
                  {data.name}
               </span>
            </h1>

            <p className="text-[1.15rem] sm:text[1.35rem] md:text-[1.5rem] lg:text-[2rem] font-semibold ">
               {about.profession.presetation}{" "}
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6320cf] to-[#be0ab5] ">
                  {about.profession.profession}
               </span>{" "}
            </p>
         </div>

         <p className="paragraph-responsive text-muted-foreground mb-4">
            {about.resume}
         </p>

         <div className="flex gap-x-4 mb-4">
            <SocialIcons.Github />
            <SocialIcons.Linkedin />
            <SocialIcons.Twitter />
            <SocialIcons.Email />
         </div>

         <div className="flex gap-x-4">
            <Button
               onClick={() => handleSection(CSectionNames.aboutMe)}
               className="h-12 w-36 rounded-lg"
            >
               {about.buttons.aboutMe}
            </Button>

            <a className="inline-block" download="CV" href="./cv.pdf">
               <Button variant={"secondary"} className="h-12 w-36 rounded-lg">
                  {about.buttons.cv}
               </Button>
            </a>
         </div>
      </div>
   );
}
