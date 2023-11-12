import { CSectionNames } from ".";

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
