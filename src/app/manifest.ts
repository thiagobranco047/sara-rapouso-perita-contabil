import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f2744",
    lang: siteConfig.language,
    icons: [
      {
        src: "/images/logo-sr.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
