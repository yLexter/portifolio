"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type IPropDropdown = {
   className?: string;
   currentOption: string | undefined;
   setCurentOption: () => void;
   options: {
      value: string;
      label: React.ReactNode;
   }[];
};

export default function Dropdown({
   className,
   currentOption,
   options,
}: IPropDropdown) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="relative inline-block text-left">
         <div className="flex justify-between p-4">
            <span className="font-semibold">
               {currentOption || "Selecione uma opção"}
            </span>
            {isOpen && <BiChevronUp className="ml-2 h-5 w-5" />}
            {!isOpen && <BiChevronDown className="ml-2 h-5 w-5" />}
         </div>

         {isOpen && (
            <div className="absolute inline-block origin-top-right right-0">
               {options.map((option) => (
                  <span>{option.label}</span>
               ))}
            </div>
         )}
      </div>
   );
}
