import React from "react";
import Presetation from "./Presetation";
import ImagePresetation from "./Image";

type IPropMain = {};

export default function Main({}: IPropMain) {
   return (
      <main className="p-4 flex w-full">
         <Presetation className="flex-1" />
         <ImagePresetation className="flex-1" />
      </main>
   );
}
