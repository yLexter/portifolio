"use client";

import { TProject } from "@/app/entities";
import React from "react";
import Project from "./Project";
import useFetch from "../hooks/useFetch";
import SectionTitle from "../UI/Texts/SectionTitle";
import BaseSection from "../UI/Section/BaseSection";

type IPropProjects = {};

export default function Projects({}: IPropProjects) {
   const { data, loading, error } = useFetch<{ projects: TProject[] }>(
      "./jsons/portfolio.json"
   );

   if (loading) return <p>Loading</p>;
   if (!data) return <p>No data found!</p>;
   if (error) return <p>{error.message}</p>;

   return (
      <BaseSection>
         <SectionTitle title="Projetos" />

         <div>
            {data.projects.map((project, index) => (
               <Project
                  index={index}
                  key={`Project-${project.name}`}
                  project={project}
               />
            ))}
         </div>
      </BaseSection>
   );
}
