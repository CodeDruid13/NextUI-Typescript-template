/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-nextui",
  titleTemplate: "%s | nextarter-nextui",
  defaultTitle: "nextarter-nextui",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextarter-nextui.sznm.dev",
  openGraph: {
    url: "https://nextarter-nextui.sznm.dev",
    title: "nextarter-nextui",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-nextui**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-nextui.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-nextui",
  },
  twitter: {
    handle: "@codedruid13",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
