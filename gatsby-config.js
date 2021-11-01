const prismicConfig = require("./prismic-configuration")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "extech-website",
        schemas: {
          product: require("./custom_types/product.json"),
        },
        linkResolver: require("./src/utils/linkResolver").linkResolver,
        lang: "*",
      },
    },
    {
      resolve: "gatsby-plugin-prismic-previews",
      options: {
        repositoryName: prismicConfig.prismicRepo,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 100,
          breakpoints: [480, 750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Source Sans Pro",
            weights: ["300", "400", "500", "700"],
          },
          {
            family: "Oswald",
            weights: ["400", "500", "700"],
          },
          {
            family: "Montserrat",
            weights: ["300", "400", "500", "700"],
          },
          {
            family: "Rubik",
            weights: ["500"],
          },
        ],
      },
    },
  ],
}
