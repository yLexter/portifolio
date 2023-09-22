import React from "react";
import NavBar from "./NavBar";

type IPropHeader = {};

export default function Header({}: IPropHeader) {
   return (
      <header className="w-full h-24 bg-primary flex justify-around items-center p-4 relative">
         <div className="flex-1">teste</div>
         <NavBar className="flex-1" />
      </header>
   );
}
