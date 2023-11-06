"use client";

import React, { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
   const [response, setResponse] = useState<T | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<Error | undefined>();

   useEffect(() => {
      setIsLoading(true);

      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            setResponse(data);
         })
         .catch((e) => {
            setError(e);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, []);

   return { data: response, loading: isLoading, error: error };
}
