"use client";

import { TJsonData, TJsonLanguageData, TLanguages } from "@/app/entities";
import React, { useContext, useEffect, useState, createContext } from "react";
import json from "../public/jsons/portfolio.json";

export type TJsonProvider = {
   data: TJsonData;
   currentData: TJsonLanguageData;
   language: TLanguages;
   setLanguage: (language: TLanguages) => void;
};

const JsonContext = createContext({} as TJsonProvider);

export const JsonContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const [currentLanguage, setCurrentLanguage] = useState<TLanguages>("pt_BR");

   const handleCurrentLanguage = (language: TLanguages) => {
      setCurrentLanguage(language);
   };

   return (
      <JsonContext.Provider
         value={{
            language: currentLanguage,
            setLanguage: handleCurrentLanguage,
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
