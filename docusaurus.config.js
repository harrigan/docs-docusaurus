// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ceramic documentation',
  tagline: 'Ceramic is a decentralized data network that powers an ecosystem of interoperable Web3 applications and services.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ceramic', // Usually your GitHub org/user name.
  projectName: 'ceramicnetwork', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ceramic Documentation',
        logo: {
          alt: 'Ceramic logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/introduction/intro',
            label: 'Introduction',
          },
          {
            label: 'Developer Tools',

            items: [
              {
                to: 'docs/composedb/getting-started',
                label: 'ComposeDB'
              },
              {
                to: "docs/wheel/wheel-reference",
                label: "Wheel",
              },
              {
                to: "docs/dids/introduction",
                label: "Decentralized Identifiers",
              },
            ],
          },
          {

            label: 'Protocol',

            items: [
              {
                to: 'docs/protocol/js-ceramic/overview',
                label: 'JS-Ceramic'
              },
              {
                to: 'protocol/rust-ceramic',
                label: "Rust-Ceramic"
              },
            ],



          },
          {
            label: 'Ecosystem',

            items: [
              {
                href: 'https://threebox.notion.site/threebox/Ceramic-Ecosystem-Directory-a3a7a58f81544d33ad3feb84368775d4',
                label: 'Ecosystem Page',
              },
              {
                href: 'https://forum.ceramic.network/',
                label: 'Forum',
              },
              {
                href: 'https://blog.ceramic.network/',
                label: 'Blog',
              },
            ],
          },
          {
            href: 'https://github.com/ceramicnetwork/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'ComposeDB',
                to: 'https://composedb.js.org/',
              },
              {
                label: 'Protocol',
                to: '/docs/protocol/js-ceramic/overview',
              },
              
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.ceramic.network/',
              },
              {
                label: 'Discord',
                href: 'http://chat.ceramic.network/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ceramicnetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ceramicnetwork/docs',
              },
              {
                label: 'Roadmap',
                href: 'https://github.com/orgs/ceramicstudio/projects/2/views/1',
              },
              {
                label: 'CIPs',
                href: 'https://forum.ceramic.network/c/cips/12'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3Box Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;