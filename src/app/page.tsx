import { Metadata } from "next";
import React from "react";
import { DOMAIN } from "../data/templateMeta";
import GetCarouselImages from "../pages/api/GetCarouselImages";
import HomePageClient from "./page-client";

const META_TITLE = "Manish Gulati Profile | Barfoot & Thompson";
const META_DESCRIPTION =
  "Meet Manish Gulati, Residential Sales, from the Barfoot & Thompson Papakura office";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: DOMAIN,
    siteName: META_TITLE,
    type: "website",
    images: "https://blobmedia.barfoot.co.nz/r3/images/55ezg.jpeg?width=261&amp;height=348&amp;mode=Crop&amp;quality=80&amp;anchor=TopCenter"
  },
};

export default async function HomePage() {
  const imageData = await getData();

  return <HomePageClient imageData={imageData} />;
}

async function getData() {
  const id = `${
    process.env.NEXT_VERCEL_ENV === "preview" ? "STAGING_" : ""
  }MILLENNIAL_CAROUSEL_IMAGES_ID`;
  const imageData = await GetCarouselImages(process.env[id]);

  return imageData;
}
