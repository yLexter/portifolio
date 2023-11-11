import CustomIcon from "../Icon/CustomIcon";
import IconWithLink from "./IconWithLink";

export const SocialIcons = {
   Github: () => (
      <IconWithLink url="google.com">
         <CustomIcon className="hover:scale-150 duration-300" icon="Github" />
      </IconWithLink>
   ),
   Twitter: () => (
      <IconWithLink url="google.com">
         <CustomIcon className="hover:scale-150 duration-300" icon="Twitter" />
      </IconWithLink>
   ),
   Linkedin: () => (
      <IconWithLink url="google.com">
         <CustomIcon className="hover:scale-150 duration-300" icon="Linkedin" />
      </IconWithLink>
   ),
};
