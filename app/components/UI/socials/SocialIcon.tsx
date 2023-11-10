import CustomIcon from "../Icon/CustomIcon";
import IconWithLink from "./IconWithLink";

export const SocialIcons = {
   Github: () => (
      <IconWithLink url="google.com">
         <CustomIcon icon="Github" />
      </IconWithLink>
   ),
   Twitter: () => (
      <IconWithLink url="google.com">
         <CustomIcon icon="Twitter" />
      </IconWithLink>
   ),
   Linkedin: () => (
      <IconWithLink url="google.com">
         <CustomIcon icon="Linkedin" />
      </IconWithLink>
   ),
};
