
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
/**
 * @typedef {import("@prismicio/client").Content.SocialMediaSlice} SocialMediaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SocialMediaSlice>} SocialMediaProps
 * @param {SocialMediaProps}
 */
const SocialMedia = ({ slice }) => {
  
  return (
    <div>
      <PrismicNextLink field={slice.primary.link}>
          <PrismicNextImage field={slice.primary.icon} className="h-24 w-auto"/>
         </PrismicNextLink>
    </div>
  );
};

export default SocialMedia;
