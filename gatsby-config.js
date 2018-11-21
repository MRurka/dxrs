module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
}
