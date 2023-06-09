import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextLink } from "@prismicio/next";


const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 rounded-lg">
        <div>
          <PrismicRichText field={slice.primary.title} />

          <div>
            <PrismicRichText field={slice.primary.text} />
            {slice.variation === 'withButton' ? <PrismicNextLink className="animate-colorChange animate-blink text-white px-4 py-2 rounded" field={slice.primary.buttonLink}>


              <b>{slice.primary.buttonText}</b>
            </PrismicNextLink> : undefined}
          </div>

        </div>





        <div>
          {prismic.isFilled.image(image) && (
            <div className="bg-gray-100">
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-50 rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
