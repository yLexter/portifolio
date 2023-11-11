"use client";

import { TDataTimeline, TProject, TSkill } from "@/app/entities";
import React, { useContext, useEffect, useState, createContext } from "react";
import json from "../public/jsons/portfolio.json";

type TLanguages = keyof typeof json.languages;

type TJsonLanguageData = {
   sectionTitle: {
      aboutMe: string;
      skills: string;
      timeline: string;
      projects: string;
   };
   about: {
      presetation: string;
      profession: {
         presetation: string;
         profession: string;
      };
      aboutMe: string;
      buttons: {
         cv: string;
         aboutMe: string;
      };
   };
   timeline: TDataTimeline[];
   projects: TProject[];
   skills: TSkill[];
};

type TJsonData = {
   name: string;
   socials: {
      github: string;
      linkedin: string;
      twitter: string;
   };
   languages: Record<TLanguages, TJsonLanguageData>;
};

type TJsonProvider = {
   data: TJsonData;
   currentData: TJsonLanguageData;
};

const JsonContext = createContext({} as TJsonProvider);

export const JsonContextProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <JsonContext.Provider
         value={{
            data: json as TJsonData,
            currentData: json["languages"]["pt_BR"] as TJsonLanguageData,
         }}
      >
         {children}
      </JsonContext.Provider>
   );
};

export const useJsonDataContext = () => useContext(JsonContext);
