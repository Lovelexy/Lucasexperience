import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import React from 'react';
import SocialMedia from "@/slices/SocialMedia";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices/";

export function Footer({ footer }) {
  return (
    <footer className=" flex justify-between h-48 items-center bg-grey-cool text-sm max-w-6xl mx-auto ">
     <PrismicRichText field={footer.data.text} />
     <SliceZone slices={footer.data.slices} components={components} />
    </footer>
  );
}
