import { TRandomIcon } from "./types";
import portfolioJson from "../public/jsons/portfolio.json";

const data = portfolioJson.languages["pt_BR"];

type SectionsKeys = keyof typeof data.naveBar;

export const CSectionNames = Object.keys(data.naveBar).reduce((acc, key) => {
   acc[key as SectionsKeys] = key.toLowerCase();

   return acc;
}, {} as Record<SectionsKeys, string>);

export const CLanguages = {
   pt_BR: {
      code: "pt_BR",
      label: "Português Brasileiro",
   },
   en_US: {
      code: "en_US",
      label: "English",
   },
};

export const TRandomIconColors: Record<TRandomIcon, string> = {
   JavaScript: "#F7DF1E",
   TypeScript: "#3178C6",
   HTML: "#E44D26",
   CSS: "#2965F1",
   React: "#61DAFB",
   NodeJs: "#8CC84B",
   Python: "#FFFFFF",
   Java: "#007396",
   ExpressJs: "#FFFFFF",
   C: "#5690ff",
   MongoDB: "#4DB33D",
   NextJs: "#FFFFFF",
   Github: "#FFFFFF",
   Linkedin: "#FFFFFF",
   Git: "#f05033",
   Twitter: "#FFFFFF",
} as const;
