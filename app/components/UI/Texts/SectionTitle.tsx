import React from "react";

type IPropSectionTitle = {
   title: React.ReactNode;
};

export default function SectionTitle({ title }: IPropSectionTitle) {
   return (
      <h1 className="font-semibold md:text-[3rem] text-[2.4rem] text-color-text-main mb-5">
         {title}
      </h1>
   );
}
