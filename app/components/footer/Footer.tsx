"use client";

import React from "react";
import { SocialIcons } from "../UI/Socials/SocialIcon";
import useScrollPosition from "../hooks/useScrollPosition";
import { twMerge } from "tailwind-merge";

import { AiOutlineArrowUp } from "react-icons/ai";

type IPropFooter = {};

export default function Footer({}: IPropFooter) {
   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <footer className="flex relative justify-center items-center absloute bottom-0 bg-primary h-32 w-full px-spacing-page ">
         <div className="flex flex-col">
            <div className="flex justify-center items-center gap-x-4 mb-4">
               <SocialIcons.Github />
               <SocialIcons.Linkedin />
               <SocialIcons.Twitter />
            </div>

            <span className="text-color-text-main text-center">
               © 2023 - Lucas Maia.
            </span>
         </div>

         <button
            onClick={handleClick}
            className={twMerge(
               "ease-in-out duration-1000 absolute right-[5%] top-[-10%] w-10 h-10 bg-slate-600",
               "bg-secondary rounded-lg shadow-lg flex justify-center items-center"
            )}
         >
            <AiOutlineArrowUp color="white" size={30} />
         </button>
      </footer>
   );
}
