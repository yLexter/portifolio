import { TProject } from "@/app/entities";
import React from "react";
import Project from "./Project";

type IPropProjects = {};

export default function Projects({}: IPropProjects) {
   const projects: TProject[] = [
      {
         name: "Projetos/Exercícios do Curso de Computação",
         url: "https://github.com/yLexter/Exercicios",
         image: "https://c8.alamy.com/comp/CY2BHT/web-development-concept-in-word-tag-cloud-on-black-background-CY2BHT.jpg",
         description: "Todos os meus exercícios e projetos da faculdade",
         languages: ["Python", "Java", "C"],
      },
   ];

   return (
      <section className="pl-spacing-page pr-spacing-page pt-spacing-page bg-bg-primary">
         <h1 className="text-[3.5rem] font-semibold text-color-text-main mb-5">
            Projetos
         </h1>

         <div>
            {projects.map((project) => (
               <Project key={`Project-${project.name}`} project={project} />
            ))}
         </div>
      </section>
   );
}
