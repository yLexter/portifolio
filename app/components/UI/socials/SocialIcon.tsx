"use client";

import { useJsonDataContext } from "@/contexts/JsonProvider";
import CustomIcon from "../Icon/CustomIcon";
import IconWithLink from "./IconWithLink";

export default function SocialIcon() {
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
   };
}
