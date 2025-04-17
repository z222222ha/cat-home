import { SiteConfig } from "@/types/siteConfig";
import { BsWechat } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/weijunext/landing-page-boilerplate";

const baseSiteConfig = {
  name: "WIT's Cats",
  description: "Let every little stray leave its own mark on this planet 🐾✨",
  url: "https://cat.djbgem.xyz",
  ogImage: "",
  metadataBase: "/",
  keywords: ["cats", "wit", "stray cat", "cat rescue", "cat adoption"],
  authors: [
    {
      name: "zhang2ha",
      url: "",
      twitter: "",
    },
  ],
  creator: "@zhang2ha",
  openSourceURL: "",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "light", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [],
  footerLinks: [
    {
      name: "buyMeCoffee",
      href: "",
      icon: SiBuymeacoffee,
    },
    {
      name: "weChat",
      href: "",
      icon: BsWechat,
    },
  ],
  footerProducts: [],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
