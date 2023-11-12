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
            primary: "#000000",
            secondary: "#6320cf",
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

         margin: {
            "spacing-section": "4rem",
         },

         spacing: {
            "header-height": "96px",
            "timeline-circle-right": "calc(-13% + 0.1px)",
            "timeline-circle-left": "calc(-13% - 1.3px)",
         },
      },
   },
   plugins: [],
};
export default config;
