"use client";

import { TProject } from "@/app/entities";
import React from "react";
import Project from "./Project";
import useFetch from "../hooks/useFetch";

type IPropProjects = {};

export default function Projects({}: IPropProjects) {
   const { data, loading, error } = useFetch<{ projects: TProject[] }>(
      "./jsons/portfolio.json"
   );

   if (loading) return <p>Loading</p>;
   if (!data) return <p>No data found!</p>;
   if (error) return <p>{error.message}</p>;

   return (
      <section className="pl-spacing-page pr-spacing-page pt-spacing-page bg-bg-primary">
         <h1 className="text-[3.5rem] font-semibold text-color-text-main mb-5">
            Projetos
         </h1>

         <div>
            {data.projects.map((project, index) => (
               <Project
                  index={index}
                  key={`Project-${project.name}`}
                  project={project}
               />
            ))}
         </div>
      </section>
   );
}
