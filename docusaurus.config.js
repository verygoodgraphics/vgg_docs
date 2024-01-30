// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VGG Docs",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.verygoodgraphics.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "verygoodgraphics", // Usually your GitHub org/user name.
  projectName: "vgg_docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    // ....
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"))
          postcssOptions.plugins.push(require("autoprefixer"))
          return postcssOptions
        },
      }
    },

    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/verygoodgraphics/vgg_docs/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "VGG Docs",
        logo: {
          alt: "VGG Logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "specSidebar",
            position: "left",
            label: "Specs",
          },
          {
            type: "docSidebar",
            sidebarId: "guideSidebar",
            position: "left",
            label: "Guides",
          },
          {
            type: "docSidebar",
            sidebarId: "containerSidebar",
            position: "left",
            label: "Containers",
          },
          {
            type: "docSidebar",
            sidebarId: "exampleSidebar",
            position: "left",
            label: "Examples",
          },
          {
            href: "https://github.com/verygoodgraphics",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sites",
            items: [
              {
                label: "VGG Home",
                href: "https://verygoodgraphics.com",
              },
              {
                label: "Daruma",
                href: "https://verygoodgraphics.com/daruma",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/89fFapjfgM",
              },
              {
                label: "X(Twitter)",
                href: "https://twitter.com/VGG_Design",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/verygoodgraphics",
              },
              {
                label: "Blog",
                href: "https://blog.verygoodgraphics.com",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} VeryGoodGraphics LTD.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "1HJINXV3SA",

        // Public API key: it is safe to commit it
        apiKey: "4cf05dfc7b460064ec89f84f81e6fe15",

        indexName: "verygoodgraphics",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: "search",

        //... other Algolia params
      },
      zoom: {
        selector: ".property img",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgba(255, 255, 255, 0.5)",
            dark: "rgba(50, 50, 50, 0.5)",
          },
        },
      },
    }),
}

export default config
