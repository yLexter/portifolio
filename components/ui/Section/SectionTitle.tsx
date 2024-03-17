import { cn } from "@/lib/utils";
import React from "react";

type IPropSectionTitle = {
   title: React.ReactNode;
   className?: string;
};

export default function SectionTitle({ title, className }: IPropSectionTitle) {
   return (
      <h1 className={cn("font-semibold lg:text-4xl text-3xl  mb-8", className)}>
         {title}
      </h1>
   );
}
