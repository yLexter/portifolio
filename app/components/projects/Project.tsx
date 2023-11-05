import { TProject } from "@/app/entities";
import React from "react";
import IconLanguage from "../UI/IconLanguage.tsx/IconLanguage";

type IPropProject = {
   project: TProject;
};

export default function Project({
   project: { name, url, image, description, languages },
}: IPropProject) {
   return (
      <article className="flex">
         <div className="flex-1">
            <div className="mb-6">
               <h1 className="text-2xl font-semibold text-color-text-main mb-4">
                  {name}
               </h1>
               <p className="text-color-text-secondary text-xl ">
                  {description}
               </p>
            </div>

            <div className="flex gap-x-4">
               {languages.map((iconLanguge) => {
                  return <IconLanguage icon={iconLanguge} />;
               })}
            </div>
         </div>

         <div className="flex-1">
            <figure>
               <a href={url} target="_blank">
                  <img src={image} alt={`Projeto: ${name}`} />
               </a>
            </figure>
         </div>
      </article>
   );
}
