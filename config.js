const config = {
  gatsby: {
    pathPrefix: '/rescript-in-korean',
    siteUrl: 'https://green-labs.github.io/rescript-in-korean',
    gaTrackingId: 'G-1KE5PEMPTL',
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://green-labs.github.io/rescript-in-korean',
    title: 'ReScript in Korean',
    githubUrl: 'https://github.com/green-labs',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'prod_gitbook',
      // algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaAppId: 'AWJNYMZ5J7',
      // algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaSearchKey: 'f09ab4cb7e4940cfafa619c094341740',
      // algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
      algoliaAdminKey: '8e26469b632427e1af1552dccf2deed8',
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/Overview', // add trailing slash if enabled above
      '/Language-Features',
      '/JavaScript-Interop',
      '/Build-System',
      '/Guides',
      '/Extra',
    ],
    collapsedNav: [
      '/Overview/Introduction', // add trailing slash if enabled above
      '/Installation', // add trailing slash if enabled above
    ],
    links: [],
    frontline: false,
    ignoreIndex: true,
    title: 'ReScript in Korean',
  },
  siteMetadata: {
    title: 'ReScript in Korean',
    description: 'ReScript in Korean',
    ogImage: '/rescript-in-korean/og.png',
    docsLocation: 'https://github.com/green-labs/rescript-in-korean/tree/main/content',
    favicon: 'https://green-labs.github.io/rescript-in-korean/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'ReScript in KR',
      short_name: 'ReScript-in-KR',
      start_url: '/rescript-in-kr',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'https://green-labs.github.io/rescript-in-korean/favicon.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
