import React from "react";
import { twMerge } from "tailwind-merge";

type IPropBaseSection = {
   className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function BaseSection({ className, ...props }: IPropBaseSection) {
   return (
      <section
         {...props}
         className={twMerge("px-spacing-page mb-spacing-section", className)}
      >
         {props.children}
      </section>
   );
}
