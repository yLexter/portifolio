import React from "react";
import NavBar from "./NavBar";

type IPropHeader = {};

export default function Header({}: IPropHeader) {
   return (
      <header className="w-full h-24 bg-bg-primary flex justify-around items-center relative pr-spacing-page pl-spacing-page">
         <h1 className="text-2xl font-semibold flex-1 text-color-text-main ">
            Lucas Maia
         </h1>
         <NavBar className="flex-1" />
      </header>
   );
}
