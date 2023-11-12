import { TProject } from "@/app/entities";
import React from "react";
import CustomIcon from "../UI/Icon/CustomIcon";
import { Button } from "../UI/Button/Button";

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
      `bg-inherit text-color-text-main duration-300 border-secondary solid border-2 font-semibold p-4 flex rounded-lg`,
      "md:text-sm md:flex-1 md:gap-x-2",
      `${!!state ? "hover:bg-secondary hover:text-color-text-main" : ""} `,
      `${!!state ? "active:bg-secondary active:text-color-text-main" : ""} `
   );
};

const ProjectInformation = ({
   project: { name, github, liveDemo, description, languages },
}: IProject) => {
   return (
      <div className="flex-1">
         <div className="mb-4">
            <h1 className="text-2xl text-center font-semibold text-color-text-main mb-4">
               {name}
            </h1>
            <p className="text-color-text-secondary text-xl text-center">
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
            <a target="_blank" href={github}>
               <Button.Provider
                  disabled={!!!github}
                  className={getClassNameButton(github)}
               >
                  GitHub
                  <Button.Icon color="white" Icon={AiFillGithub} />
               </Button.Provider>
            </a>
            <a target="_blank" href={liveDemo}>
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
      <div className="flex flex-1 items-start justify-center sm:hidden sm:flex-[0]">
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
      <article className="flex mb-16 gap-x-16 md:gap-x-1">
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
