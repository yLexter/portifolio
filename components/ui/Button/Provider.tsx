import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

type IPropProvider = {
   className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Provider({ className, ...props }: IPropProvider) {
   return (
      <button
         className={twMerge(
            "p-4 flex justify-center items-center h-8 w-auto gap-x-1 shadow-lg",
            className
         )}
         {...props}
      >
         {props.children}
      </button>
   );
}
