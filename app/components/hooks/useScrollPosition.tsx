import React, { useState, useEffect } from "react";

export default function useScrollPosition() {
   const [scrollPosition, setScrollPosition] = useState(0);

   useEffect(() => {
      const handlePosition = () => {
         setScrollPosition(window.scrollY);
      };

      window.addEventListener("scroll", handlePosition);

      return () => {
         return window.removeEventListener("scroll", handlePosition);
      };
   }, []);

   return { scrollPosition };
}
