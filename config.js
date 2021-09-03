const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://unthrottled.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://unthrottled.io/brand.png',
    logoLink: '/',
    title: "Unthrottled",
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
      '/',
      '/introduction',
      '/accomplishments',
      '/thestrugglebus',
      '/reflections',
      '/nextchapter',
    ],
    collapsedNav: [],
    links: [{ text: 'Unthrottled', link: 'https://unthrottled.io' }],
    frontline: false,
    ignoreIndex: false,
    title: "<span><a id='homeBoy' href='/'>ultramarathon</a></span>",
  },
  siteMetadata: {
    title: 'The Ultramarathon',
    description: 'Reflections on the search for greatness.',
    ogImage: null,
    favicon: 'https://unthrottled.io/unthrottled_v2.ico',
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
