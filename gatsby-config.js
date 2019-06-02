module.exports = {

  // Website meta information
  siteMetadata: {
    title: "WOLO | We Only Live Once",
    titleTemplate: "%s",
    description: "WOLO is a global community that believes in the pursuit of purpose, experiences and the betterment of oneself and the people around us. Join the club!",
    url: "https://www.wolo.club", // No trailing slash allowed!
    image: "/assets/wolo-club-thumbnail-image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@_rurka",
  },

  plugins: [
    // Sass Compiling
    `gatsby-plugin-sass`,

    // Netlify CMS
    `gatsby-plugin-netlify-cms`,

    // Adding page metadata
    `gatsby-plugin-react-helmet`,
    {
      // Set directory for markdown files
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    // transformer-sharp and plugin-sharp are necessary for processing images from the CMS
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'assets'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 900,
            },
          },
          {
            // Necessary for processing non-JPG/PNG files
            resolve: `gatsby-remark-copy-images`,
          },
        ],
      },
    },
  ],
}
