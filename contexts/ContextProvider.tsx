import React from "react";
import { JsonContextProvider } from "./JsonProvider";

type IPropContextProvider = {
   children: React.ReactNode;
};

export default function ContextProvider({ children }: IPropContextProvider) {
   return <JsonContextProvider>{children}</JsonContextProvider>;
}
