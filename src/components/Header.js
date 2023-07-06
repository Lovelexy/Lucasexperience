import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";

export function Header({ navigation, settings }) {
  return (
    <Bounded as="header" yPadding="sm" className="bg-transparent fixed justify-between w-full">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none text-bizarro  ">
        <PrismicNextLink
          href="/"
          className="white text-xl font-semibold tracking-tight w-auto h-30 flex items-center mr-8"
        >
          <PrismicText  field={settings.data.siteTitle} />
          <PrismicNextImage className="w-20 mx-8 " field={settings.data.logo} />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight  text-bizarro"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText className="white " field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
