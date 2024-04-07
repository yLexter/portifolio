import { TProject } from "@/entities";
import React from "react";
import CustomIcon from "../ui/SocialsIcons/CustomIcon";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import ModalProjectImage from "../modals/ModalProjectImage";
import { Badge } from "../ui/badge";

type IProject = {
   project: TProject;
};

type IPropProject = {
   index: number;
} & IProject;

const getClassNameButton = (state: string | undefined) => {
   return twMerge(
      `flex items-center bg-inherit duration-300 border-secondary solid border-2`,
      "font-semibold p-4 rounded-lg",
      "md:text-sm md:flex-1 md:gap-x-2",
      "lg:w-36 lg:h-12 lg:text-xl",
      `${!!state ? "hover:bg-secondary hover:" : ""} `,
      `${!!state ? "active:bg-secondary active:" : ""} `
   );
};

const ProjectInformation = ({
   project: { name, github, liveDemo, description, languages },
}: IProject) => {
   return (
      <div className="w-full md:w-1/2 p-4">
         <div className="mb-4">
            <h1 className="text-center text-xl font-semibold mb-4 title-responsive ">
               {name}
            </h1>
            <p className="text-muted-foreground text-center paragraph-responsive">
               {description}
            </p>
         </div>

         <div className="flex flex-wrap gap-4 items-center justify-center mb-4">
            {languages.map((language) => {
               return (
                  <Badge key={`${name}-${language}`} variant="outline">
                     {language}
                  </Badge>
               );
            })}
         </div>

         <div className="flex gap-x-4 justify-center">
            <a className="inline-block" target="_blank" href={github}>
               <Button
                  disabled={!!!github}
                  className={getClassNameButton(github)}
               >
                  <AiFillGithub />
                  GitHub
               </Button>
            </a>
            <a className="inline-block" target="_blank" href={liveDemo}>
               <Button
                  disabled={!!!liveDemo}
                  className={getClassNameButton(liveDemo)}
               >
                  Demo
                  <MdOpenInNew />
               </Button>
            </a>
         </div>
      </div>
   );
};

const ProjectImage = ({ project }: IProject) => {
   return (
      <div className="hidden flex-1 items-start justify-center md:w-1/2 md:flex hover:scale-105">
         <ModalProjectImage project={project}>
            <figure>
               <img
                  className="w-full h-auto rounded-lg object-cover shadow-lg"
                  src={project.image}
                  alt={`Projeto: ${project.name}`}
               />
               <figcaption className="text-muted-foreground">
                  Clique para ver a imagem melhor
               </figcaption>
            </figure>
         </ModalProjectImage>
      </div>
   );
};

export default function Project({ project, index }: IPropProject) {
   return (
      <article className="flex mb-16 md:gap-x-16">
         {index % 2 == 0 && (
            <>
               <ProjectInformation project={project} />
               <ProjectImage project={project} />
            </>
         )}
         {index % 2 != 0 && (
            <>
               <ProjectImage project={project} />
               <ProjectInformation project={project} />
            </>
         )}
      </article>
   );
}
