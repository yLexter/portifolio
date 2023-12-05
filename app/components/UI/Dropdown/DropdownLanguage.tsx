"use client";

import React, { useState } from "react";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { TLanguages } from "@/app/entities";
import { IconType } from "react-icons";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { twMerge } from "tailwind-merge";

type TLanguageOptionDropdwon = {
   Icon: IconType;
   value: TLanguages;
   label: React.ReactNode;
};

const options: Record<TLanguages, TLanguageOptionDropdwon> = {
   pt_BR: {
      value: "pt_BR",
      label: "Português Brasil",
      Icon: GiBrazilFlag,
   },
   en_US: {
      value: "en_US",
      label: "English USA",
      Icon: LiaFlagUsaSolid,
   },
};

type IPropsDropdownLanguage = {
   className?: string;
};

type IPropsDropdown = {
   data: TLanguageOptionDropdwon;
} & React.DetailedHTMLProps<
   React.LiHTMLAttributes<HTMLLIElement>,
   HTMLLIElement
>;

const OptionDropdown = ({
   data: { Icon, label },
   ...props
}: IPropsDropdown) => {
   return (
      <li
         className="flex gap-x-4 justify-center items-center cursor-pointer"
         {...props}
      >
         <Icon color="white" size={24} />{" "}
         <span className="font-bold text-color-text-main">{label}</span>
      </li>
   );
};

const Dropdown = ({
   isDropdownOpen,
   setIsDropdownOpen,
   language,
   setLanguage,
}: {
   isDropdownOpen: boolean;
   language: TLanguages;
   setIsDropdownOpen: () => void;
   setLanguage: (language: TLanguages) => void;
}) => {
   const currentLanguage = options[language];
   const optionsLanguage = Object.values(options).filter(
      (option) => option.value != language
   );

   return (
      <div className="relative w-full bg-blue-950">
         <button
            type="button"
            className="h-full w-full bg-transparent inline-flex justify-center items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="dropdown"
            onClick={setIsDropdownOpen}
         >
            <OptionDropdown data={currentLanguage} />
         </button>

         {isDropdownOpen && (
            <div className="bg-blue-950 origin-top-right absolute right-0 mt-2 h-24 overflow-y-scroll w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
               <ul className="py-1" role="menu">
                  {optionsLanguage.map((option) => (
                     <OptionDropdown
                        key={`Option-${option.label}`}
                        data={option}
                        onClick={() => setLanguage(option.value)}
                     />
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default function DropdownLanguage({
   className,
}: IPropsDropdownLanguage) {
   const [isDropdownSettingsOpen, setIsDropdownSettingsOpen] = useState(false);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const { language, setLanguage } = useJsonDataContext();

   const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
   };

   const toggleLanguage = (language: TLanguages) => {
      setIsDropdownSettingsOpen(false);
      setLanguage(language);
   };

   const toggleDropdownSettings = () => {
      if (isDropdownOpen) {
         setIsDropdownOpen(!isDropdownOpen);
      }

      setIsDropdownSettingsOpen(!isDropdownSettingsOpen);
   };

   return (
      <div className={twMerge("relative", className)}>
         <div className="cursor-pointer" onClick={toggleDropdownSettings}>
            <IoMdSettings color="white" size={34} />
         </div>

         {isDropdownSettingsOpen && (
            <div className="absolute inline-block w-24 ">
               <div className="origin-top-right absolute right-0 mt-2 w-48 py-1">
                  <Dropdown
                     language={language}
                     setLanguage={toggleLanguage}
                     setIsDropdownOpen={toggleDropdown}
                     isDropdownOpen={isDropdownOpen}
                  />
               </div>
            </div>
         )}
      </div>
   );
}
