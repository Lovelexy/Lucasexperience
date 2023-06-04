import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";
import { Layout } from "@/components/Layout";
import ThreeScene from '../components/ThreeScene';
import { Footer } from '../components/Footer';
const Index = ({ page, navigation, settings, footer }) => {
  return (
    <Layout navigation={navigation} settings={settings} footer={footer} >
      <ThreeScene>
      <Head>
        <title>{prismic.asText(page.data.title)}</title>
      </Head>
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
      </ThreeScene>
      
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });


  return {
    props: {
      page,
      navigation,
      settings,
      footer,
    },
  };
}
