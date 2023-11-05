export type TLanguagesAndFrameworks =
   | "JavaScript"
   | "TypeScript"
   | "HTML"
   | "CSS"
   | "React"
   | "NodeJs"
   | "Python"
   | "Java"
   | "ExpressJs"
   | "C";

export type TProject = {
   name: string;
   url: string;
   image: string;
   description: string;
   languages: TLanguagesAndFrameworks[];
};
