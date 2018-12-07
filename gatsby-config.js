module.exports = {

  // Website meta information
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
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
        ],
      },
    },
  ],
}
