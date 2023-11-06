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
   | "C"
   | "MongoDB"
   | "NextJs";

export const TLanguageColors: Record<TLanguagesAndFrameworks, string> = {
   JavaScript: "#F7DF1E",
   TypeScript: "#3178C6",
   HTML: "#E44D26",
   CSS: "#2965F1",
   React: "#61DAFB",
   NodeJs: "#8CC84B",
   Python: "#3776AB",
   Java: "#007396",
   ExpressJs: "#FFFFFF",
   C: "#A8B9CC",
   MongoDB: "#4DB33D",
   NextJs: "#FFFFFF",
} as const;

export type TProject = {
   name: string;
   url: string;
   image: string;
   description: string;
   languages: TLanguagesAndFrameworks[];
};
