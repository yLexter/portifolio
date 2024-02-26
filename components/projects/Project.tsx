import { TProject } from "@/entities";
import React from "react";
import CustomIcon from "../ui/Icon/CustomIcon";
import { Button } from "../ui/Button/Button";

import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type IProject = {
   project: TProject;
};

type IPropProject = {
   index: number;
} & IProject;

const getClassNameButton = (state: string | undefined) => {
   return twMerge(
      `bg-inherit  duration-300 border-secondary solid border-2 font-semibold p-4 flex rounded-lg`,
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
      <div className="w-full md:w-1/2">
         <div className="mb-4">
            <h1 className="text-center font-semibold mb-4 title-responsive ">
               {name}
            </h1>
            <p className="text-card-foreground text-center paragraph-responsive">
               {description}
            </p>
         </div>

         <div className="flex gap-x-4 justify-center mb-4">
            {languages.map((iconLanguge) => {
               return (
                  <CustomIcon
                     key={`Project-${name}-${iconLanguge}`}
                     icon={iconLanguge}
                  />
               );
            })}
         </div>

         <div className="flex gap-x-4 justify-center">
            <a className="inline-block" target="_blank" href={github}>
               <Button.Provider
                  disabled={!!!github}
                  className={getClassNameButton(github)}
               >
                  <Button.Icon color="white" Icon={AiFillGithub} />
                  GitHub
               </Button.Provider>
            </a>
            <a className="inline-block" target="_blank" href={liveDemo}>
               <Button.Provider
                  disabled={!!!liveDemo}
                  className={getClassNameButton(liveDemo)}
               >
                  Demo
                  <Button.Icon color="white" Icon={MdOpenInNew} />
               </Button.Provider>
            </a>
         </div>
      </div>
   );
};

const ProjectImage = ({
   project: { name, github, liveDemo, image, description, languages },
}: IProject) => {
   const urlRepository = liveDemo || github;

   return (
      <div className="hidden items-start justify-center md:w-1/2 md:flex">
         <figure className="shadow-lg hover:scale-105">
            <a href={urlRepository} target="_blank">
               <img
                  className="w-full h-[350px] rounded-lg"
                  src={image}
                  alt={`Projeto: ${name}`}
               />
            </a>
         </figure>
      </div>
   );
};

export default function Project({ project, index }: IPropProject) {
   return (
      <article className="bg-card flex mb-16 md:gap-x-16">
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
