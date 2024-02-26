"use client";

import { CSectionNames, TProject } from "@/entities";
import React from "react";
import Project from "./Project";
import useFetch from "../hooks/useFetch";
import SectionTitle from "../ui/Texts/SectionTitle";
import BaseSection from "../ui/Section/BaseSection";
import { useJsonDataContext } from "@/contexts/JsonProvider";

type IPropProjects = {};

export default function Projects({}: IPropProjects) {
   const { currentData } = useJsonDataContext();

   return (
      <BaseSection id={CSectionNames.projects}>
         <SectionTitle title="Projetos" />

         <>
            {currentData.projects.map((project, index) => (
               <Project
                  index={index}
                  key={`Project-${project.name}`}
                  project={project}
               />
            ))}
         </>
      </BaseSection>
   );
}
