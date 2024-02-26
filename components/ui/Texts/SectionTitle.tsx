import React from "react";

type IPropSectionTitle = {
   title: React.ReactNode;
};

export default function SectionTitle({ title }: IPropSectionTitle) {
   return <h1 className="font-semibold lg:text-4xl text-3xl  mb-8">{title}</h1>;
}
