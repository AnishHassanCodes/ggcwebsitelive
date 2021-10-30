module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Golden Girl Cosmetics`,
    description: `We are a cosmetics brand that offer all the best of cosmetics innovation in terms of quality, efficiency, and safety by meeting the infinite diversity of beauty needs and desires all over the world. .`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `video`,
          path: `${__dirname}/src/videos`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/components/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts:[
          `Poppins`,
          `muli\:300,400,500,600,700`,
            ],
            display : "swap",
      },
    }
  ],
}
