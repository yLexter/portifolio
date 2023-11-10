import React from "react";

type IPropSectionTitle = {
   title: React.ReactNode;
};

export default function SectionTitle({ title }: IPropSectionTitle) {
   return (
      <h1 className="font-semibold text-[3rem] text-color-text-main mb-5">
         {title}
      </h1>
   );
}
