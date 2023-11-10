import React from "react";
import Presetation from "./Presetation";
import Skills from "../skills/Skills";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <section
         style={{ backgroundImage: 'url("./images/main-image.jpg" ' }}
         className="mb-spacing-section bg-cover bg-left px-spacing-page  flex w-full relative pt-header-height h-screen bg-gradient-to-r from-primary to-transparent"
      >
         <Presetation />
      </section>
   );
}
