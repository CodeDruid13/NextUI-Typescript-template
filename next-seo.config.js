/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "starter-nextui",
  titleTemplate: "%s | starter-nextui",
  defaultTitle: "starter-nextui",
  description: "Next.js + NetxUI + TypeScript template",
  canonical: "",
  openGraph: {
    url: "",
    title: "starter-nextui",
    description: "Next.js + NextUi + TypeScript template",
    images: [
      {
        url: "https://starter-nextui.netlify.app/",
        alt: "NextUi Starter",
      },
    ],
    site_name: "starter-nextui",
  },
  twitter: {
    handle: "@codedruid13",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
