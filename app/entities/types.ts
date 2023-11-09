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
   | "NextJs";

export const TRandomIconColors: Record<TRandomIcon, string> = {
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
   Github: "#FFFFFF",
   Linkedin: "#FFFFFF",
   Twitter: "#FFFFFF",
} as const;

export type TProject = {
   name: string;
   github?: string;
   liveDemo?: string;
   image: string;
   description: string;
   languages: TRandomIcon[];
};
