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
            primary: "black",
            secondary: "green",
            "primary-secondary": "#333333",
            "color-text-main": "#F2F2F2",
            "color-text-secondary": "#e5e7eb",
         },

         height: {
            "header-height": "96px",
         },

         width: {
            "custom-full": "calc(100% - 160px)",
         },

         padding: {
            "spacing-page": "15%",
            "header-height": "96px",
         },
      },
   },
   plugins: [],
};
export default config;
