"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { SocialIcon } from "../UI/SocialsIcons/SocialIcon";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useJsonDataContext } from "@/contexts/JsonProvider";

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

            <span className="text-color-text-main text-center paragraph-responsive">
               © 2023 - {data.name}.
            </span>
         </div>

         <button
            onClick={handleClick}
            className={twMerge(
               "ease-in-out duration-1000 absolute right-[5%] top-[-10%] w-14 h-14",
               "bg-secondary rounded-lg shadow-lg flex justify-center items-center"
            )}
         >
            <AiOutlineArrowUp color="white" size={30} />
         </button>
      </footer>
   );
}
