import { TProject } from "@/app/entities";
import React from "react";
import CustomIcon from "../UI/Icon/CustomIcon";
import { Button } from "../UI/Button/Button";

import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";

type IProject = {
   project: TProject;
};

type IPropProject = {
   index: number;
} & IProject;

const ProjectInformation = ({
   project: { name, github, liveDemo, description, languages },
}: IProject) => {
   return (
      <div className="flex-1">
         <div className="mb-6">
            <h1 className="text-2xl text-center font-semibold text-color-text-main mb-4">
               {name}
            </h1>
            <p className="text-color-text-secondary text-xl text-center">
               {description}
            </p>
         </div>

         <div className="flex gap-x-4 justify-center mb-4">
            {languages.map((iconLanguge) => {
               return <CustomIcon icon={iconLanguge} />;
            })}
         </div>

         <div className="flex gap-x-4 justify-center">
            <Button.Provider
               disabled={!!github}
               className="bg-inherit solid border-2 border-purple-700 text-color-text-secondary"
            >
               <Button.Icon color="white" Icon={AiFillGithub} />
               GitHub
            </Button.Provider>

            <Button.Provider
               disabled={!!liveDemo}
               className="bg-inherit solid border-2 border-purple-700 text-color-text-secondary"
            >
               Live Demo
               <Button.Icon color="white" Icon={MdOpenInNew} />
            </Button.Provider>
         </div>
      </div>
   );
};

const ProjectImage = ({
   project: { name, github, liveDemo, image, description, languages },
}: IProject) => {
   const urlRepository = liveDemo || github;

   return (
      <div className="flex flex-1 items-start justify-center">
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
      <article className="flex mb-16 gap-x-16">
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
