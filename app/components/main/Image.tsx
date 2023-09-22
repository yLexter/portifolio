import React from "react";
import { twMerge } from "tailwind-merge";

type IPropImagePresetation = {
   className?: string;
};

export default function ImagePresetation({ className }: IPropImagePresetation) {
   return <div className={twMerge("", className)}></div>;
}
