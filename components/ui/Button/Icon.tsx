import React from "react";
import { IconType } from "react-icons";

type IPropIcon = {
   className?: string;
   color?: string;
   Icon: IconType;
};

export default function Icon({ Icon, className, color }: IPropIcon) {
   return <Icon size={25} color={color} className={className}></Icon>;
}
