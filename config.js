const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://unthrottled.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://unthrottled.io/brand.svg',
    logoLink: '/',
    title: "",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/butwhy',
      '/accomplishments',
      '/thestrugglebus',
      '/reflections',
      '/nextchapter',
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Unthrottled', link: 'https://unthrottled.io' }],
    frontline: false,
    ignoreIndex: true,
    title: "<span>ultramarathon</span>",
  },
  siteMetadata: {
    title: 'Ultramarathon',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    favicon: 'https://unthrottled.io/brand.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
