"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import ListNaveBar from "./ListNaveBar";
import Menu from "./Menu";

type IPropNav = {
   className?: string;
};

export default function NavBar({ className }: IPropNav) {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      document.body.style.overflowY = !menuOpen ? "hidden" : "inherit";
      setMenuOpen(!menuOpen);
   };

   return (
      <nav className={twMerge("", className)}>
         <ListNaveBar className="hidden lg:flex lg:justify-between" />
         <Menu
            isOpen={menuOpen}
            toggleMenu={toggleMenu}
            className="lg:hidden"
         />
      </nav>
   );
}
