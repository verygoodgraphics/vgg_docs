// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VGG Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.verygoodgraphics.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'verygoodgraphics', // Usually your GitHub org/user name.
  projectName: 'vgg_docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/verygoodgraphics/vgg_docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'VGG Docs',
        logo: {
          alt: 'VGG Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'specSidebar',
            position: 'left',
            label: 'Specs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'containerSidebar',
            position: 'left',
            label: 'Containers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'exampleSidebar',
            position: 'left',
            label: 'Examples',
          },
          {
            href: 'https://github.com/verygoodgraphics',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'VGG Sites',
            items: [
              {
                label: 'VGG Home',
                href: 'https://verygoodgraphics.com',
              },
              {
                label: 'VGG Docs',
                href: 'https://docs.verygoodgraphics.com',
              },
              {
                label: 'VGG Playground',
                href: 'https://verygoodgraphics.com/playground',
              },
              {
                label: 'VGG Daruma',
                href: 'https://verygoodgraphics.com/daruma',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/vB3bcSvNvb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/VGG_Design',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.verygoodgraphics.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/verygoodgraphics',
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
    }),
};

export default config;
