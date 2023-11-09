import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            "bg-primary": "black",
            "primary-secondary": "#333333",
            secondary: "green",
            "color-text-main": "#F2F2F2",
            "color-text-secondary": "#e5e7eb",
         },

         width: {
            "custom-full": "calc(100% - 160px)",
         },

         padding: {
            "spacing-page": "12%",
         },
      },
   },
   plugins: [],
};
export default config;
