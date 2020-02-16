module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Podróże Przez Świat',
    author: 'Tomek D.',
    description: 'Blog podróże przez świat',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'O mnie',
        link: '/no-sidebar',
      },
      {
        name: 'Gdzie byłam',
        link: '#',
        items: [
          {
            name: 'Afryka',
            link: '/left-sidebar',
          },
          {
            name: 'Ameryka Południowa',
            link: '/right-sidebar',
          },
          {
            name: 'Ameryka Północna',
            link: '/no-sidebar',
          },
          {
            name: 'Australia i Oceania',
            link: '/no-sidebar',
          },
          {
            name: 'Azja',
            link: '/no-sidebar',
          },
          {
            name: 'Europa',
            link: '/europa',
          },
        ],
      },
      {
        name: 'Polecane Hotele',
        link: '/no-sidebar',
      },
      {
        name: 'Mapa podróży',
        link: '/elements',
      },
      {
        name: 'Współpraca',
        link: '/elements',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
