"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { SocialIcon } from "../ui/SocialsIcons/SocialIcon";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { Button } from "../ui/button";

type IPropFooter = {};

export default function Footer({}: IPropFooter) {
   const SocialIcons = SocialIcon();
   const { data } = useJsonDataContext();

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <footer className="flex relative justify-center items-center absloute bottom-0 h-32 w-full px-spacing-page ">
         <div className="flex flex-col">
            <div className="flex justify-center items-center gap-x-4 mb-4">
               <SocialIcons.Github />
               <SocialIcons.Linkedin />
               <SocialIcons.Twitter />
            </div>

            <span className=" text-center paragraph-responsive">
               © 2023 - {data.name}.
            </span>
         </div>

         <Button
            onClick={handleClick}
            className="absolute right-[5%] top-[-10%] w-14 h-14"
         >
            <AiOutlineArrowUp color="white" size={30} />
         </Button>
      </footer>
   );
}
