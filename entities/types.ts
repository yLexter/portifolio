import { CLanguages, CSectionNames } from ".";
import portfolioJson from "../public/jsons/portfolio.json";

export type TRandomIcon =
   | "JavaScript"
   | "TypeScript"
   | "HTML"
   | "CSS"
   | "React"
   | "NodeJs"
   | "Python"
   | "Java"
   | "ExpressJs"
   | "C"
   | "MongoDB"
   | "Github"
   | "Linkedin"
   | "Twitter"
   | "Git"
   | "NextJs";

export type TSkill = {
   title: string;
   icons: TRandomIcon[];
   description: string;
};

export type TSectionName = (typeof CSectionNames)[keyof typeof CSectionNames];

export type TProject = {
   name: string;
   github?: string;
   liveDemo?: string;
   image: string;
   description: string;
   languages: TRandomIcon[];
};

export type TDataTimeline = {
   title: string;
   date: string;
   text: string;
};

export type TLanguages = keyof typeof CLanguages;

export type TJsonLanguageData = {
   naveBar: {
      home: string;
      aboutMe: string;
      skills: string;
      timeline: string;
      projects: string;
      contact: string;
   };

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
      resume: string;
      aboutMe: string;
      buttons: {
         cv: string;
         aboutMe: string;
      };
   };
   contact: {
      inputs: {
         username: {
            label: string;
            placeholder: string;
         };
         email: {
            label: string;
            placeholder: string;
         };
         message: {
            label: string;
            placeholder: string;
         };
      };
      submit: string;
   };
   timeline: TDataTimeline[];
   projects: TProject[];
   skills: TSkill[];
};

export type TJsonData = {
   name: string;
   socials: {
      github: string;
      linkedin: string;
      twitter: string;
   };
   languages: Record<TLanguages, TJsonLanguageData>;
};
