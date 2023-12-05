"use client";

import { TJsonData, TJsonLanguageData, TLanguages } from "@/app/entities";
import React, { useContext, useEffect, useState, createContext } from "react";
import json from "../public/jsons/portfolio.json";

export type TJsonProvider = {
   data: TJsonData;
   currentData: TJsonLanguageData;
   language: TLanguages;
   setLanguage: React.Dispatch<React.SetStateAction<TLanguages>>;
};

const JsonContext = createContext({} as TJsonProvider);

export const JsonContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [currentLanguage, setCurrentLanguage] = useState<TLanguages>("pt_BR");

   return (
      <JsonContext.Provider
         value={{
            language: currentLanguage,
            setLanguage: setCurrentLanguage,
            data: json as TJsonData,
            currentData: json["languages"][
               currentLanguage
            ] as TJsonLanguageData,
         }}
      >
         {children}
      </JsonContext.Provider>
   );
};

export const useJsonDataContext = () => useContext(JsonContext);
