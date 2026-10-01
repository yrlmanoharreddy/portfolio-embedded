import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Laxmi Manohar Meda — Embedded Software Engineer",
    short_name: "LMM Portfolio",
    description:
      "Embedded software and firmware engineering portfolio for Laxmi Manohar Meda.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0e0c",
    theme_color: "#0b0e0c",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}

