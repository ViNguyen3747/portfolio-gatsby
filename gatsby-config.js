const data = require('./src/data/data');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    defaultTheme: 'sunny'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/data/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,  // <-- this line adds emoji
        ]
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GITHUB_API_TOKEN,
        graphQLQuery: data.githubApiQuery,

      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // set the color you want for your progress bar here
        color: '#ffd858',
        // set the height of the scroll indicator
        height: '4px',
        // Set specific paths where you want the scroll indicator using regex
        paths: ['/', '/works'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },



  ]
}
