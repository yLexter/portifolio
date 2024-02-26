import React from "react";

type IPropIconWithLink = {
   url: string;
   children: React.ReactNode;
};

export default function IconWithLink({ url, children }: IPropIconWithLink) {
   return (
      <a target="_blank" href={url}>
         {children}
      </a>
   );
}
