module.exports = {
  title: 'Bizzy documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'luctst', // Usually your GitHub org/user name.
  projectName: 'bizzy-docs', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'bizzy',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      }
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Bizzy-docs, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routebasePath: "",
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
