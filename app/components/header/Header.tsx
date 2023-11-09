import React from "react";
import NavBar from "./NavBar";

type IPropHeader = {};

export default function Header({}: IPropHeader) {
   return (
      <header className="fixed top-0 left-0 w-full h-header-height bg-primary flex justify-around items-center z-10 pr-spacing-page pl-spacing-page">
         <h1 className="text-2xl font-semibold flex-1 text-color-text-main ">
            Lucas Maia
         </h1>
         <NavBar className="flex-1" />
      </header>
   );
}
