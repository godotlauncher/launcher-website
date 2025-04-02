import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import "dotenv/config";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "The Companion App for Godot Engine",

  tagline:
    "A standalone app to streamline editor downloads, manage multiple versions, and automate new project setups—so you can focus on building great games.",
  favicon: "img/favicon-16x16.png",

  // Set the production url of your site here
  url: "https://godotlauncher.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "godotlauncher", // Usually your GitHub org/user name.
  projectName: "launcher-website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  baseUrlIssueBanner: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("./plugins/github-releases"),
  ],
  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          path: "./blog",
          routeBasePath: "/blog",
          showReadingTime: true,
          blogTitle: "Godot Launcher Blog",
          blogDescription: "Stay up to date with the latest news and updates from the Godot Launcher team.",
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        pages: {
          path: "./src/pages",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: { containerId: process.env.GOOGLE_TAG_MANAGER_ID },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    // Replace with your project's social card
    image: "img/Godot-Launcher-Social-Card.jpg",
    navbar: {
      title: "Godot Launcher",
      hideOnScroll: true,
      logo: {
        alt: "Godot Launcher Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        // { to: "#features", label: "Features", position: "left", },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/community", label: "Community", position: "left" },
        { to: "/faq", label: "FAQs", position: "left" },
        {
          href: "https://docs.godotlauncher.org",
          label: "Docs",
          position: "right",
        },
        {
          to: "/contribute",
          label: "Contribute",
          position: "right",
        },
        {
          to: "/download",
          label: "Download",
          position: "right",
          className: "button button--primary  button--outline ",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Godot Launcher",
          items: [
            {
              label: "Download",
              to: "/download",
            },
            {
              label: "Download Archive",
              to: "/download/archive",
            },

            {
              label: "Documentation",
              href: "https://docs.godotlauncher.org",
            },
            {
              label: "Releases",
              href: "https://github.com/godotlauncher/launcher/releases",
            },
            {
              label: "Source Code",
              href: "https://github.com/godotlauncher/launcher",
            },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "FAQs", to: "/faq" },
            { label: "Contribute", to: "/contribute" },
            { label: "Community", to: "/community" },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
            {
              html: `<a href="#cookie-settings" data-cc="c-settings" class="footer__link-item">Cookie Settings</a>`,
            },
            {
              label: "Code of Conduct",
              to: "/code-of-conduct",
            },
            { label: "License", to: "/license" },
            {
              label: "GitHub",
              href: "https://github.com/godotlauncher",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mario Debono and contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
