"use client";

import { useJsonDataContext } from "@/contexts/JsonProvider";
import CustomIcon from "./CustomIcon";
import IconWithLink from "./IconWithLink";

export function SocialIcon() {
   const {
      data: { socials },
   } = useJsonDataContext();

   return {
      Github: () => (
         <IconWithLink url={socials.github}>
            <CustomIcon
               className="hover:scale-150 duration-300"
               icon="Github"
            />
         </IconWithLink>
      ),
      Twitter: () => (
         <IconWithLink url={socials.twitter}>
            <CustomIcon
               className="hover:scale-150 duration-300"
               icon="Twitter"
            />
         </IconWithLink>
      ),
      Linkedin: () => (
         <IconWithLink url={socials.linkedin}>
            <CustomIcon
               className="hover:scale-150 duration-300"
               icon="Linkedin"
            />
         </IconWithLink>
      ),
      Email: () => (
         <IconWithLink url={`mailto:${socials.email}`}>
            <CustomIcon className="hover:scale-150 duration-300" icon="Email" />
         </IconWithLink>
      ),
   };
}
