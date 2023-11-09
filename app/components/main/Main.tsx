import React from "react";
import Presetation from "./Presetation";
import Skills from "../skills/Skills";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <section
         style={{ backgroundImage: 'url("./images/main-image.jpg" ' }}
         className="bg-cover pr-spacing-page pl-spacing-page flex w-full relative h-screen"
      >
         <Presetation className="w-[40%]" />
      </section>
   );
}
