import React from "react";
import Presetation from "./Presetation";
import Skills from "../skills/Skills";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <section
         style={{ backgroundImage: 'url("./images/main-image.jpg" ' }}
         className="bg-cover pr-spacing-page pl-spacing-page pt-[5%] flex w-full relative h-auto"
      >
         <Presetation className="w-1/3" />
      </section>
   );
}
